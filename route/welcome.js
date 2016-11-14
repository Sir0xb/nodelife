'use strict';

module.exports = function (app) {
    app.get("/", function (req, res, next) {
        res.render("index.html", {
            // user    : req.session.user,
            // currentUser: userdata,
            // menus   : obj[0].subMenu || [],
            // message : message,
            title   : 'welcome',
            appName : 'welcome',
            appUrl  : '/',
            // compress: ['localhost', '127.0.0.1'].indexOf(req.hostname) != -1 ? false : true,
            // showTest: !!req.query.unitTest,
            params  : { test: true }
        });
    });

    app.post('/login', function (req, res, next) {
        var UserDao = require("../models/userDao");

        var username = req.body.username;
        var password = req.body.password;

        console.info(username);
        console.info(password);

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

    app.get('register', function (req, res, next) {
        res.render("index.html", {
            // user    : req.session.user,
            // currentUser: userdata,
            // menus   : obj[0].subMenu || [],
            // message : message,
            title   : 'welcome',
            appName : 'welcome'
            // compress: ['localhost', '127.0.0.1'].indexOf(req.hostname) != -1 ? false : true,
            // showTest: !!req.query.unitTest,
            // params  : params
        });
    });
};
