'use strict';

import cleaner_css       from './cleaner/cleaner.css';
import cleaner_link      from './cleaner/cleaner.link';
import cleaner_js        from './cleaner/cleaner.js';
import cleaner_html      from './cleaner/cleaner.html';
import cleaner_iframe    from './cleaner/cleaner.iframe';

import compile_css       from './compile/compile.css';
import compile_link      from './compile/compile.link';
import compile_js        from './compile/compile.js';
import compile_html      from './compile/compile.html';
import compile_iframe    from './compile/compile.iframe';

module.exports = function (gulp, $) {
    return $.q.fcall(function () {
        return $.jobStart('Task build');
    }).then(function () {
        return $.great_promise([
            cleaner_css(gulp, $),
            cleaner_link(gulp, $),
            cleaner_js(gulp, $),
            cleaner_html(gulp, $),
            cleaner_iframe(gulp, $)
        ]);
    }).then(function () {
        return compile_iframe(gulp, $);
    }).then(function () {
        return $.great_promise([
            $.q.fcall(function () {
                return compile_css(gulp, $);
            }).then(function () {
                return compile_link(gulp, $);
            }),
            $.q.fcall(function () {
                return compile_js(gulp, $);
            }).then(function () {
                return compile_html(gulp, $)
            })
        ]);
    }).then(function () {
        return $.jobEnd('Task build');
    });
};
