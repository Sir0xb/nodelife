'use strict';

module.exports = function (gulp, $) {
    return function () {
        $.rubySass([`${base}/public/css/*.scss`], {
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
        .pipe(gulp.dest(`${base}/public/css/`))
        .on("end", function () {
            let endTime = new Date();
            config.jobEnd($, endTime, 'SASS compile', endTime.getTime() - startTime.getTime(), base);

            def.resolve();
        });
    };
};
