'use strict';

import path from 'path';

module.exports = function (gulp, $) {
    return $.defer(function (def) {
        $.jobStart('Compile js');

        gulp.src($.js.paths)
        .pipe($.plumber())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.jshint())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe($.uglify({
            managle: false
        }))
        .pipe($.rev())
        .pipe(gulp.dest($.js.dest_path))
        .pipe($.rev.manifest({
            path  : path.join(__dirname, $.js.manifest_path),
            cwd   : path.join(__dirname, $.js.minifest_cwd),
            merge : true
        }))
        .pipe(gulp.dest($.js.dest_path))
        .on('finish', function () {
            $.jobEnd('Compile js');

            def.resolve();
        });
    });
};
