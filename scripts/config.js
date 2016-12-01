'use strict';

import L       from 'lodash';
import Plugins from 'gulp-load-plugins';

let $ = Plugins({
    pattern: ['gulp-*', 'gulp.*', 'q', 'lodash', 'chalk', 'dateformat'],
    lazy: true
});

// { base64: [Getter],
//   clean: [Getter],
//   concat: [Getter],
//   cssimport: [Getter],
//   cssmin: [Getter],
//   htmlmin: [Getter],
//   if: [Getter],
//   jshint: [Getter],
//   minifyCss: [Getter],
//   plumber: [Getter],
//   rename: [Getter],
//   replace: [Getter],
//   rev: [Getter],
//   revCollector: [Getter],
//   rubySass: [Getter],
//   sourcemaps: [Getter],
//   uglify: [Getter],
//   util: [Getter],
//   watch: [Getter],
//   q: [Getter],
//   dateformat: [Getter],
//   lodash: [Getter] }

let base = '.';
let timeCache = {};

let config = {
    sass: {
        watch_paths: (() => {
            return [
                `${base}/public/styles/**/*.scss`
            ];
        })(),

        clean_paths: (() => {
            return [
                `${base}/public/styles/*.css`,
                `${base}/public/styles/maps/*.map`,
                `${base}/public/styles/maps`
            ];
        })(),

        paths: (() => {
            return [
                `${base}/public/styles/*.scss`
            ];
        })(),
        base64_size: 1024,
        map_path: 'maps',
        dest_path: `${base}/public/styles/`
    },
    css: {
        clean_paths: (() => {
            return [
                `${base}/public/styles/*.min.css`,
                `${base}/public/styles/maps/`
            ]
        })(),

        paths: (() => {
            return [
                `${base}/public/styles/*.scss`
            ];
        })(),
        map_path: 'maps',
        dest_path: `${base}/public/styles/`
    },
    defer: function (callback) {
        let def = $.q.defer();

        callback(def);

        return def.promise;
    },
    jobStart: function (taskName, base = null) {
        let startTime = new Date();
        timeCache[`${taskName}${base}`] = startTime;
        console.info(`[${ $.chalk.gray($.dateformat(startTime, 'H:MM:ss')) }] ${ $.chalk.red('Starting') } '${ $.chalk.green(taskName) }' ... ${ base != null ? ' ==> ' + $.chalk.yellow(base) : '' }`);
        return true;
    },
    jobEnd: function (taskName, base = null) {
        let startTime = timeCache[`${taskName}${base}`];
        let endTime = new Date();
        console.info(`[${ $.chalk.gray($.dateformat(endTime, 'H:MM:ss')) }] ${ $.chalk.blue('Finished') } '${ $.chalk.green(taskName) }' in ${ $.chalk.magenta(endTime.getTime() - startTime.getTime() + ' ms') } ${ base != null ? ' ==> ' + $.chalk.yellow(base) : '' }`);
        return true;
    }
};

L.extend(module.exports, $);
L.extend(module.exports, config);
