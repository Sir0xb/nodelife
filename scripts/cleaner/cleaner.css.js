'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Clean css');

        gulp.src($.css.clean_paths, {
            read: false
        })
        .pipe($.plumber())
        .pipe($.clean())
        .on("finish", function () {
            $.jobEnd('Clean css');

            def.resolve();
        });
    });
};
