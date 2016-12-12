'use strict';

define(["knockout", "Super"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        console.info("This is welcome page information");

        if (self.data.test) {
            window.welcome = self;
        }
    };
});
