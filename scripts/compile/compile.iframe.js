'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Make iframe');

        gulp.src($.iframe.paths)
        .pipe($.plumber())
        .pipe($.replace(new RegExp(`<iframe (\\s*${$.iframe.make_key}\\s*)+`, 'g'), `<iframe ${$.iframe.make_key} `))
        .pipe(gulp.dest($.iframe.dest_path))
        .on('finish', function () {
            $.jobEnd('Make iframe');

            def.resolve();
        });
    });
};
