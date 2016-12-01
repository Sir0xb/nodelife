'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Recovery iframe');

        gulp.src($.iframe.paths)
        .pipe($.plumber())
        .pipe($.replace(new RegExp(`<iframe (\\s*${$.iframe.make_key}\\s*)+`, 'g'), `<iframe `))
        .pipe(gulp.dest($.iframe.dest_path))
        .on('finish', function () {
            $.jobEnd('Recovery iframe');

            def.resolve();
        });
    });
};
