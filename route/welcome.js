'use strict';

module.exports = function (app) {
    app.get("/", function (req, res, next) {
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
