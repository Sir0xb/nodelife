define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context, 'login');

        self.login = function () {
            Tools.ajax({
                url    : "url",
                data   : {
                    params
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
