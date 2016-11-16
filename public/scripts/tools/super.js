define(["knockout", "sweetalert", "Tools", "ko-amd", "ko-mapping", "semantic"], function (ko, sweet, Tools) {
    return function (context) {
        var self = this;

        self.parent = context.parent;
        self.data   = context.data;
        self.sweet  = sweet;

        self.viewport = self.parent.viewport;
        self.vpStyle = self.parent.vpStyle;

        self.container = ko.observable({});
        self.loading = self.parent.loading;

        return self;
    };
});
