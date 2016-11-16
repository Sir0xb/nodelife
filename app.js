'use strict';

import express from 'express';
import cookie from 'cookie-parser';
import parser from 'body-parser';
import session from 'express-session';

import FileStreamRotator from 'file-stream-rotator';
import ___ from 'connect-mongo';
let MongoStore = ___(session);

import morgan from 'morgan';
import flash from 'connect-flash';
import swig from 'swig';
import nunjucks from 'nunjucks';
import fs from 'fs';

import Config from './config/config';
import route from './route';

let logDirectory = `${__dirname}/log`;
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream = FileStreamRotator.getStream({
    filename  : `${logDirectory}/access-%DATE%.log`,
    frequency : 'daily',
    verbose   : false
});

let app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 8080);
app.set('views',  `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(flash());
app.use(cookie());
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use(session({
    secret              : Config.cookie.secret,
    resave              : false,
    saveUninitialized   : true,
    key                 : "nodelife",
    cookie              : { maxAge: 1000 * 60 * 60 * 24 * 30 },
    store               : new MongoStore({
        url  : Config.mongodb
    })
}));
app.use(morgan('combined', {stream: accessLogStream}));

app.listen(app.get("port"), function () {
    return console.log(`测试服务器启动，服务端口 ${ app.get('port') }`);
});

route(app);
