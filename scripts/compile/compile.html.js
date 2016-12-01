'use strict';

import path from 'path';

module.exports = function (gulp, $) {
    const options = {
        removeComments                  : false,                                 // 清除HTML注释
        collapseWhitespace              : true,                                  // 压缩HTML
        collapseBooleanAttributes       : true,                                  // 省略布尔属性的值 <input checked="true"/> ====> <input />
        removeEmptyAttributes           : true,                                  // 删除所有空格作属性值 <input id="" /> ====> <input />
        removeScriptTypeAttributes      : true,                                  // 删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes   : true,                                  // 删除<style>和<link>的type="text/css"
        minifyJS                        : true,                                  // 压缩页面JS
        minifyCSS                       : true                                   // 压缩页面CSS
    };

    return $.defer(function (def) {
        $.jobStart('Compile html');

        gulp.src($.html.paths)
        .pipe($.plumber())
        .pipe($.htmlmin(options))
        .pipe($.rename({
            extname: '.html'
        }))
        .pipe($.rev())
        .pipe(gulp.dest($.html.dest_path))
        .pipe($.rev.manifest({
            path    : path.join(__dirname, $.html.manifest_path),
            cwd     : path.join(__dirname, $.html.minifest_cwd),
            merge   : true
        }))
        .pipe(gulp.dest($.html.dest_path))
        .on('end', function () {
            $.jobEnd('Compile html');

            def.resolve();
        });
    });
};
