'use strict';

import cleaner_css       from './cleaner/cleaner.css';
import cleaner_link      from './cleaner/cleaner.link';
import cleaner_js        from './cleaner/cleaner.js';
import cleaner_html      from './cleaner/cleaner.html';
import cleaner_iframe    from './cleaner/cleaner.iframe';

module.exports = function (gulp, $) {
    return $.q.fcall(function () {
        return $.jobStart('Task clean');
    }).then(function () {
        return $.great_promise([
            cleaner_css(gulp, $),
            cleaner_link(gulp, $),
            cleaner_js(gulp, $),
            cleaner_html(gulp, $)
        ]);
    }).then(function () {
        return cleaner_iframe(gulp, $);
    });
};
