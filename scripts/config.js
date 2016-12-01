'use strict';

import L       from 'lodash';
import Plugins from 'gulp-load-plugins';

let $ = Plugins({
    pattern: ['gulp-*', 'gulp.*', 'q', 'lodash', 'chalk', 'dateformat'],
    lazy: true
});

// console.dir($);
//
// { babel: [Getter],
//   base64: [Getter],
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
//   lodash: [Getter],
//   chalk: [Getter],
//   dateformat: [Getter] }

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
                `${base}/public/styles/*-*.css`,
                `${base}/public/styles/*.json`
            ]
        })(),

        paths: (() => {
            return [
                `${base}/public/styles/*.css`,
                `!${base}/public/styles/*-*.css`
            ];
        })(),
        map_path: 'maps',
        dest_path: `${base}/public/styles/`
    },
    link: {
        clean_paths: (() => {
            return [
                `${base}/views/layout/links.html`
            ];
        })(),
        pattern: /main(\S*).css/g,
        reset_name: 'main.css',

        paths: (() => {
            return [
                `${base}/public/styles/rev-manifest.json`,
                `${base}/views/layout/links.html`
            ];
        })(),

        dest_path: `${base}/views/layout/`
    },
    js: {
        clean_paths: (() => {
            return [
                `${base}/public/scripts/**/*-*.min.js`,
                `${base}/public/scripts/*.json`
            ];
        })(),

        paths: (() => {
            return [
                `${base}/public/scripts/**/*.js`,
                `!${base}/public/scripts/**/*.min.js`,
                `!${base}/public/scripts/base_config.js`,
            ];
        })(),
        manifest_path: `../../public/scripts/rev-manifest.json`,
        minifest_cwd: `../../public/scripts/`,

        dest_path: `${base}/public/scripts/`
    },
    html: {
        clean_paths: (() => {
            return [
                `${base}/public/scripts/**/*-*.html`,
                `!${base}/public/scripts/**/ko-*.html`
            ];
        })(),

        paths: (() => {
            return [
                `${base}/public/scripts/**/*.html`,
                `!${base}/public/scripts/**/*-*.html`
            ];
        })(),
        manifest_path: `../../public/scripts/rev-manifest.json`,
        minifest_cwd: `../../public/scripts/`,

        dest_path: `${base}/public/scripts/`
    },
    iframe: {
        paths: (() => {
            return [
                `${base}/public/scripts/applications/**/*.html`
            ];
        })(),

        make_key: 'police',
        dest_path: `${base}/public/scripts/applications/`
    },
    defer (callback) {
        let def = $.q.defer();

        callback(def);

        return def.promise;
    },
    great_promise (honestArray) {
        let deferred = $.q.defer();

        $.q.all(honestArray)
        .then(function () {
            deferred.resolve();
        });

        return deferred.promise;
    },
    jobStart (taskName, base = null) {
        let startTime = new Date();
        timeCache[`${taskName}${base}`] = startTime;
        console.info(`[${ $.chalk.gray($.dateformat(startTime, 'H:MM:ss')) }] ${ $.chalk.red('Starting') } '${ $.chalk.green(taskName) }' ... ${ base != null ? ' ==> ' + $.chalk.yellow(base) : '' }`);
        return true;
    },
    jobEnd (taskName, base = null) {
        let startTime = timeCache[`${taskName}${base}`];
        let endTime = new Date();
        console.info(`[${ $.chalk.gray($.dateformat(endTime, 'H:MM:ss')) }] ${ $.chalk.blue('Finished') } '${ $.chalk.green(taskName) }' in ${ $.chalk.magenta(endTime.getTime() - startTime.getTime() + ' ms') } ${ base != null ? ' ==> ' + $.chalk.yellow(base) : '' }`);
        return true;
    }
};

L.extend(module.exports, $);
L.extend(module.exports, config);
