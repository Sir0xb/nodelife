'use strict';

import test_cleaner from './cleaner/cleaner.html';
import js_compile from './compile/compile.js';
import html_compile from './compile/compile.html';

module.exports = function (gulp, $) {
    return $.q.fcall(function () {
        return $.jobStart('Tast test');
    }).then(function () {
        return test_cleaner(gulp, $);
    }).then(function () {
        return js_compile(gulp, $);
    }).then(function () {
        return html_compile(gulp, $);
    }).then(function () {
        return $.jobEnd('Tast test');
    });
};
