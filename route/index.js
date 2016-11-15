'use strict';

import welcome from './welcome';

module.exports = function (app) {
    welcome(app);

    app.get("/demos", function (req, res, next) {
        res.render("index.html", {
            user    : req.session.user,
            // currentUser: userdata,
            // menus   : obj[0].subMenu || [],
            // message : message,
            title   : '培训内容',
            appName : 'demos',
            appUrl  : '/demos',
            // compress: ['localhost', '127.0.0.1'].indexOf(req.hostname) != -1 ? false : true,
            // showTest: !!req.query.unitTest,
            params  : { test: true }
        });
    });
};
