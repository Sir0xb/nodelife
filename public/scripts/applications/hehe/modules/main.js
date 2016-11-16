define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context);

        self.hehe = ko.observable(obj);
        self.hehe1 = ko.observableArray(obj);

        Tools.ajax({
            url    : "/event/login",
            data   : {
                hehe: self.hehe(),
                hehe1: self.hehe1()
            },
            success: function (returnData) {
                console.info(returnData);

                if (returnData.success) {
                    // body...
                }
            }
        });

        if (self.data.test) {
            main = self;
        }
    };
});
