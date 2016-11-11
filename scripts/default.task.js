'use strict';

module.exports = function (gulp, $) {
    return function () {
        $.rubySass([`./public/styles/*.scss`], {
            sourcemap: true
        })
        .pipe($.plumber())
        .pipe($.base64({
            maxImageSize: 1024
        }))
        .pipe($.minifyCss())
        .pipe($.sourcemaps.write("maps", {
            includeContent: false
        }))
        .pipe(gulp.dest(`./public/styles/`));
    };
};
