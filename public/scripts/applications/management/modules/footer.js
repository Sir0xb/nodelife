'use strict';

define(["knockout", "Super"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        console.info("footer");

        if (self.data.test) {
            window.footer = self;
        }
    };
});
