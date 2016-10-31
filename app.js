'use strict';

import koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import serve from 'koa-static';

import render from './lib/render';
import route from './route';

let app = koa();

app.use(logger());
app.use(serve(path.join(__dirname, '/public')));

route(app, render);

app.listen(8080);
