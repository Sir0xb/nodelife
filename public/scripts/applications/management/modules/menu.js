'use strict';

define(["knockout", "Super"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        // body...

        if (self.data.test) {
            window.menu = self;
        }
    };
});
