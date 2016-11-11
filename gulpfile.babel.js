'use strict';

import gulp   from 'gulp';
import $      from 'gulp-load-plugins';
import Config from './scripts/gulp.config.js';
import build  from './scripts/build.task.js';
import test   from './scripts/test.task.js';
import untest from './scripts/untest.task.js';
import watch  from './scripts/watch.task.js';
import def    from './scripts/default.task.js';

gulp.task("build", build(gulp, $(Config.$option)));

gulp.task("test", test(gulp, $(Config.$option)));

gulp.task("untest", untest(gulp, $(Config.$option)));

gulp.task("watch", watch(gulp, $(Config.$option)));

gulp.task("default", def(gulp, $(Config.$option)));
