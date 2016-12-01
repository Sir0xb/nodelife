'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Recovery link');

        gulp.src($.link.clean_paths)
        .pipe($.replace($.link.pattern, $.link.reset_name))
        .pipe(gulp.dest($.link.dest_path))
        .on('finish', function () {
            $.jobEnd('Recovery link');

            def.resolve();
        });
    });
};
