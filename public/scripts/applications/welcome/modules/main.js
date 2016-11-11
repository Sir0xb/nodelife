define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context, 'login');

        self.username = ko.observable('');
        self.password = ko.observable('');

        self.login = function () {
            Tools.ajax({
                url    : "/login",
                data   : {
                    username: self.username(),
                    password: self.password()
                },
                success: function (returnData) {
                    console.info(returnData);

                    if (returnData.success) {
                        // body...
                    }
                }
            });
        };

        if (self.data.test) {
            main = self;
        }
    };
});
