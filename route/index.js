'use strict';

import Q from 'q';
import Welcome from './welcome';

module.exports = function (app) {
    app.get('*', function (req, res, next) {
        res.render("index.html", {
            test    : true,
            isLogin : !!req.session.user
        });
    });

    Welcome(app);

    // 构建基础全局数据
    // app.get('*', function (req, res, next) {
        // let user = req.session.user;
        // let url = req.url;
        //
        // if (['/welcome', '/event/login', '/event/register'].indexOf(url) == -1 && !user) {
        //     Loger(req, "Get", true);
        //     return res.redirect('/welcome');
        // } else {
            // next();
        // }

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

        // promiseArray.push(function () {
        //     let def = Q.defer();
        //     let FooterDao = require("../models/footerDao");
        //     FooterDao.findAll(function (err, obj) {
        //         Object.assign(req.session.params, {
        //             siteList: obj
        //         });
        //         def.resolve();
        //     });
        //
        //     return def.promise;
        // }());

        // Q.all(promiseArray).then(function () {
        //     res.render("index.html", {
        //         user    : Object.is(req.session.user),
        //         params  : Object.assign({
        //             test: true,
        //             isLogin: !!req.session.user
        //         }, req.session.params)
        //     });
        // });


    //     res.render("index.html", {
    //         test    : true,
    //         isLogin : !!req.session.user
    //     });
    // });
};
