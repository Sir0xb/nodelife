'use strict';

define(["knockout", "Super"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        self.information = ko.observable(context.info);

        if (self.data.test) {
            window.detaile = self;
        }
    };
});
