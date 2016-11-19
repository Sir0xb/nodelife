'use strict';

import _ from 'lodash';

// 系统管理
module.exports = function (app) {
    app.get("/management", function (req, res, next) {
        res.render("index.html", {
            user    : req.session.user,
            // currentUser: userdata,
            // menus   : obj[0].subMenu || [],
            // message : message,
            title   : '系统管理',
            appName : 'management',
            appUrl  : '/management',
            // compress: ['localhost', '127.0.0.1'].indexOf(req.hostname) != -1 ? false : true,
            // showTest: !!req.query.unitTest,
            params  : _.extend({ test: true }, req.session.params)
        });
    });

    app.post('/event/footerUpdate', function (req, res, next) {
        let FooterDao = require("../models/footerDao");

        let siteInfo = req.body.siteInfo;

        FooterDao.findById(siteInfo._id, function (err, obj) {
            if (err || !obj) {
                FooterDao.add(siteInfo, function (err, obj) {
                    if (err) {
                        res.json({
                            success: false,
                            message: '添加失败!'
                        });
                    } else {
                        res.json({
                            success: true,
                            info: obj
                        });
                    }
                });
            } else {
                FooterDao.updateById(siteInfo._id, siteInfo, function (err) {
                    if (err) {
                        res.json({
                            success: false,
                            message: '更新失败!'
                        });
                    } else {
                        res.json({
                            success: true,
                            info: siteInfo
                        });
                    }
                });
            }
        });
    });

    app.post('/event/deleteFooter', function (req, res, next) {
        let FooterDao = require("../models/footerDao");

        FooterDao.removeById(req.body.id, function (err) {
            if (err) {
                res.json({
                    success: false,
                    message: '删除失败!'
                });
            } else {
                res.json({
                    success: true
                });
            }
        });
    });
};
