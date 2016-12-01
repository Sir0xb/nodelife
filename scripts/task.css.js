'use strict';

import css_cleaner from './cleaner/cleaner.css';
import css_compile from './compile/compile.css';

module.exports = function (gulp, $) {
    return $.q.fcall(function () {
        return $.jobStart('CSS');
    }).then(function () {
        return css_cleaner(gulp, $);
    }).then(function () {
        return css_compile(gulp, $);
    }).then(function () {
        return $.jobEnd('CSS');
    });
};
