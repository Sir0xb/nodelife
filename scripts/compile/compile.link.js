'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Make link');

        gulp.src($.link.paths)
        .pipe($.plumber())
        .pipe($.revCollector())
        .pipe(gulp.dest($.link.dest_path))
        .on('finish', function () {
            $.jobEnd('Make link');

            def.resolve();
        });
    });
};
