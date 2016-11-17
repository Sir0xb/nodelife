'use strict';

import Loger from '../lib/loger';

import customs from './customs';
import management from './management';
import welcome from './welcome';
import demos from './demos';

module.exports = function (app) {

    // 安全检查
    customs(app);

    management(app);
    welcome(app);
    demos(app);

    // app.get("*", function (req, res, next) {
    //     Loger(req, "Get", false, 18);
    //
    //     res.render("index.html", {
    //         user    : req.session.user,
    //         // currentUser: userdata,
    //         // menus   : obj[0].subMenu || [],
    //         // message : message,
    //         title   : '404',
    //         appName : 'missing',
    //         appUrl  : '/missing',
    //         // compress: ['localhost', '127.0.0.1'].indexOf(req.hostname) != -1 ? false : true,
    //         // showTest: !!req.query.unitTest,
    //         params  : { test: true }
    //     });
    // });
};
