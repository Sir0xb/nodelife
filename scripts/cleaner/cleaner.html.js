'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Clean html');

        gulp.src($.html.clean_paths, {
            read: false
        })
        .pipe($.plumber())
        .pipe($.clean())
        .on("finish", function () {
            $.jobEnd('Clean html');

            def.resolve();
        });
    });
};
