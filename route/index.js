'use strict';

import Loger from '../lib/loger';
import Q from 'q';

import customs from './customs';
import management from './management';
import welcome from './welcome';
import demos from './demos';

module.exports = function (app) {

    // 构建基础全局数据
    app.get('*', function (req, res, next) {
        let deferred = Q.defer();
        let promiseArray = [];

        // 菜单信息加载
        // promiseArray.push(function () {
        //     let def = Q.defer();
        //     let FooterDao = require("../models/footerDao");
        //     FooterDao.findAll(function (err, obj) {
        //         req.session.params = {
        //             appUrl: req.url,
        //             siteList: obj
        //         };
        //         def.resolve();
        //     });
        //
        //     return def.promise;
        // }());

        // footer信息加载
        promiseArray.push(function () {
            let def = Q.defer();
            let FooterDao = require("../models/footerDao");
            FooterDao.findAll(function (err, obj) {
                req.session.params = {
                    appUrl: req.url,
                    siteList: obj
                };
                def.resolve();
            });

            return def.promise;
        }());

        Q.all(promiseArray).then(function () {
            next();
        });
    });

    // 安全检查
    customs(app);

    management(app);
    welcome(app);
    demos(app);

    // 处理无法识别的地址
    app.get("*", function (req, res, next) {
        return res.redirect('/firsteye');
    });
};
