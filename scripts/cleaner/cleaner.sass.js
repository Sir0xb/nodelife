'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Clean sass');

        gulp.src($.sass.clean_paths, {
            read: false
        })
        .pipe($.plumber())
        .pipe($.clean())
        .on("finish", function () {
            $.jobEnd('Clean sass');

            def.resolve();
        });
    });
};
