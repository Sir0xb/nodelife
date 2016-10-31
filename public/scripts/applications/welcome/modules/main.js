define(["knockout", "Super"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        console.info("welcome");

        if (self.data.test) {
            main = self;
        }
    };
});
