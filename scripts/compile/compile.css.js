'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Compile css');

        gulp.src($.css.paths)
        .pipe($.plumber())
        .pipe($.rev())
        .pipe(gulp.dest($.css.dest_path))
        .pipe($.rev.manifest())
        .pipe(gulp.dest($.css.dest_path))
        .on('finish', function () {
            $.jobEnd('Compile css');

            def.resolve();
        });
    });
};
