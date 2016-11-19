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
};
