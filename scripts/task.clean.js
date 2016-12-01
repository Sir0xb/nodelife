'use strict';

import cleaner_css       from './cleaner/cleaner.css';
import cleaner_link      from './cleaner/cleaner.link';
import cleaner_js        from './cleaner/cleaner.js';
import cleaner_html      from './cleaner/cleaner.html';

module.exports = function (gulp, $) {
    return $.great_promise([
        cleaner_css(gulp, $),
        cleaner_link(gulp, $),
        cleaner_js(gulp, $),
        cleaner_html(gulp, $)
    ]);
};
