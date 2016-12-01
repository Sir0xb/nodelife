'use strict';

import gulp      from 'gulp';

import $         from './scripts/config';
import tk_build  from './scripts/task.build';
import tk_clean  from './scripts/task.clean';
import tk_sass   from './scripts/task.sass';

import test      from './scripts/task.test';

gulp.task('test', function () {
    return test(gulp, $);
});


gulp.task('clean', function () {
    return tk_clean(gulp, $);
});

gulp.task('build', function () {
    return tk_build(gulp, $);
});

gulp.task('watch', ['default'], function () {
    return gulp.watch($.sass.watch_paths, ['default']);
});

gulp.task('default', function () {
    return tk_sass(gulp, $);
});
