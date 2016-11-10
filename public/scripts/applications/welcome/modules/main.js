define(["knockout", "Super", "layout"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        self.type = ko.observable('big');

        console.info("welcome");

        if (self.data.test) {
            main = self;
        }
    };
});
