'use strict';

module.exports = function (render) {
    return function *(next) {
        this.body = yield render('index', {
            title   : '首页',
            appName : 'welcome'
        });

        yield next;
    }
};
