define(["knockout", "sweetalert", "Tools", "ko-amd", "semantic"], function (ko, sweet, Tools) {
    return function (context, viewport) {
        var self = this;

        self.parent = context.parent;
        self.data   = context.data;
        self.sweet  = sweet;

        self.viewport = self.parent.viewport;
        if (!Tools.isBlank(viewport)) {
            self.viewport(viewport);
        }
        
        self.container = ko.observable({});

        return self;
    };
});
