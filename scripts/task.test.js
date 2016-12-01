'use strict';

import test_cleaner from './cleaner/cleaner.iframe';
import test_compile from './compile/compile.iframe';

module.exports = function (gulp, $) {
    return $.q.fcall(function () {
        return $.jobStart('Tast test');
    }).then(function () {
        return test_cleaner(gulp, $);
    }).then(function () {
        return test_compile(gulp, $);
    }).then(function () {
        return $.jobEnd('Tast test');
    });
};
