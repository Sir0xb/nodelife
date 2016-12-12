'use strict';

import _ from 'lodash';

// 登陆 注册账号
module.exports = function (app) {
    app.post("/event/logout", function (req, res, next) {
        req.session.user = null;

        res.json({
            success: true,
            message: '成功退出'
        });
    });

    app.post('/event/login', function (req, res, next) {
        let UserDao = require("../models/userDao");

        let username = req.body.username;
        let password = req.body.password;

        UserDao.findByName(username, function (err, obj) {
            if (err || !obj) {
                res.json({
                    success: false,
                    message: '用户名或密码错误'
                });
            } else {
                if (obj.username == username && obj.password == password) {
                    req.session.user = username;
                    res.json({
                        success: true
                    });
                } else {
                    res.json({
                        success: false,
                        message: '用户名或密码错误'
                    });
                }
            }
        });
    });

    app.post('/event/register', function (req, res, next) {
        let UserDao = require("../models/userDao");

        let username = req.body.username;
        let password = req.body.password;
        let confirm_password = req.body.confirm_password;

        UserDao.findByName(username, function (err, obj) {
            console.log(err);
            console.log(obj);

            if (err) {
                res.json({
                    success: false,
                    message: "系统异常，请联系管理员"
                });
            } else if (obj) {
                res.json({
                    success: false,
                    message: "用户已存在"
                });
            } else {
                UserDao.save({
                    username: username,
                    password: password,
                    level   : username == 'root' ? 1 : 7
                }, function (err) {
                    if (!err) {
                        res.json({
                            success  : true,
                            message  : "创建成功"
                        });
                    }
                });
            }
        });
    });
};
