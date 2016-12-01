'use strict';

import gulp      from 'gulp';

import $         from './scripts/config';
import tk_sass   from './scripts/task.sass';

import test      from './scripts/task.css';

gulp.task('test', function () {
    test(gulp, $);
});

gulp.task('watch', ['default'], function () {
    gulp.watch($.sass.watch_paths, ['default']);
});

gulp.task('default', function () {
    tk_sass(gulp, $);
});
