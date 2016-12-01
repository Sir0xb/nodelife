'use strict';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Compile sass');

        $.rubySass($.sass.paths, {
            noCache   : true,
            sourcemap : true
        })
        .pipe($.plumber())
        .pipe($.base64({
            maxImageSize: $.sass.base64_size
        }))
        .pipe($.minifyCss())
        .pipe($.sourcemaps.write($.sass.map_path, {
            includeContent: false
        }))
        .pipe(gulp.dest($.sass.dest_path))
        .on("finish", function () {
            $.jobEnd('Compile sass');

            def.resolve();
        });
    });
};
