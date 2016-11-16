define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context);

        self.username = ko.observable('');
        self.password = ko.observable('');

        self.login = function () {
            Tools.ajax({
                url    : "/event/login",
                data   : {
                    username: self.username(),
                    password: self.password()
                },
                success: function (returnData) {
                    if (returnData.success) {
                        location.href = "/main";
                    } else {
                        self.sweet('', returnData.message, 'error');
                    }
                }
            });
        };

        if (self.data.test) {
            login = self;
        }
    };
});
