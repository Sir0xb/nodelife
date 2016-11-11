define(["knockout", "sweetalert", "ko-amd", "semantic"], function (ko, sweet) {
    return function (context) {
        var self = this;

        self.parent = context.parent;
        self.data = context.data;
        self.sweet = sweet;

        self.viewport = self.parent.viewport;
        self.container = ko.observable({});

        return self;
    };
});
