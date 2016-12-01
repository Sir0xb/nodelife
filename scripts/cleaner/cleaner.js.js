'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Clean js');

        gulp.src($.js.clean_paths, {
            read: false
        })
        .pipe($.plumber())
        .pipe($.clean())
        .on("finish", function () {
            $.jobEnd('Clean js');

            def.resolve();
        });
    });
};
