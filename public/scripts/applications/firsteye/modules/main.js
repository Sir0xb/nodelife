define(["knockout", "Super"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        self.viewport("normal");

        // body...

        if (self.data.test) {
            main = self;
        }
    };
});
