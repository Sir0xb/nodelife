'use strict';

import gulp      from 'gulp';

import $         from './scripts/config';
import tk_sass   from './scripts/task.sass';

import test      from './scripts/task.test';

gulp.task('test', function () {
    return test(gulp, $);
});

gulp.task('watch', ['default'], function () {
    return gulp.watch($.sass.watch_paths, ['default']);
});

gulp.task('default', function () {
    return tk_sass(gulp, $);
});
