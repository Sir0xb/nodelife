define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context);

        self.username = ko.observable('');
        self.password = ko.observable('');
        self.confirm_password = ko.observable('');

        self.register = function () {
            Tools.ajax({
                url    : "/event/register",
                data   : {
                    username         : self.username(),
                    password         : self.password(),
                    confirm_password : self.confirm_password()
                },
                success: function (returnData) {
                    console.info(returnData);

                    if (returnData.success) {
                        self.sweet('', returnData.message, 'success');
                        location.hash = "#/login";
                    } else {
                        self.sweet('', returnData.message, 'error');
                    }
                }
            });
        };

        if (self.data.test) {
            register = self;
        }
    };
});
