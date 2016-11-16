'use strict';

import Loger from '../lib/loger';

// 安全检查
module.exports = function (app) {
    app.use(function (req, res, next) {
        let user = req.session.user;
        let url = req.url;

        if (['/welcome', '/event/login', '/event/register'].indexOf(url) == -1 && !user) {
            Loger(req, "Get", true);
            return res.redirect('/welcome');
        } else {
            next();
        }
    });

    // app.get("*", function (req, res, next) {
    //     let user = req.session.user;
    //     let url = req.url;
    //
    //     if (/^(\/lib|\/scripts|\/styles)/.test(url)) {
    //         Loger(req, "Get", true, 13);
    //
    //         next();
    //     } else {
    //         if (!user) {
    //             if (url == '/welcome') {
    //                 Loger(req, "Get", true, 19);
    //
    //                 next();
    //             } else {
    //                 Loger(req, "Get", false, 23);
    //
    //                 res.redirect('/welcome');
    //             }
    //         } else {
    //             if (url == '/welcome') {
    //                 Loger(req, "Get", false, 29);
    //
    //                 res.redirect('/main');
    //             } else {
    //                 Loger(req, "Get", true, 33);
    //
    //                 next();
    //             }
    //         }
    //     }
    // });
    //
    // app.post('*', function (req, res, next) {
    //     let user = req.session.user;
    //     let url = req.url;
    //
    //     if (!user) {
    //         if (['/event/login', '/event/register'].indexOf(req.url) == -1) {
    //             Loger(req, "Post", false, 47);
    //
    //             res.json({
    //                 success: false,
    //                 message: '用户或地址错误'
    //             });
    //         } else {
    //             Loger(req, "Post", true, 54);
    //
    //             next();
    //         }
    //     } else {
    //         Loger(req, "Post", true, 59);
    //
    //         next()
    //     }
    // });
};
