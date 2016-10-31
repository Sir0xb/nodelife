'use strict';

import route from 'koa-route';
import welcome from './welcome';

module.exports = function (app, render) {
    app.use(route.get('/', welcome(render)));
};
