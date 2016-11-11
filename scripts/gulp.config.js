'use strict';

module.exports = function () {
    let config = {
        $option: {
            pattern: ['gulp-*', 'gulp.*'],
            lazy: true
        }
    };

    return config;
};
