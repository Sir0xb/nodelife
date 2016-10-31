'use strict';

import gulp   from 'gulp';
import $      from 'gulp-load-plugins';
import build  from './scripts/build.task.js';
import test   from './scripts/test.task.js';
import untest from './scripts/untest.task.js';
import watch  from './scripts/watch.task.js';
import def    from './scripts/default.task.js';

gulp.task("build", build(gulp, $));

gulp.task("test", test(gulp, $));

gulp.task("untest", untest(gulp, $));

gulp.task("watch", watch(gulp, $));

gulp.task("default", def(gulp, $));
