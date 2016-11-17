'use strict';

define(["knockout", "Super", "sammy"], function (ko, Super, Sammy) {
    return function (context) {
        var self = Super.call(this, context);

        self.viewport("normal");

        Sammy(function () {
            let fileter = ['menu', 'footer'];

            this.get(/\#\/([\s\S]*)/, function (){
                var module = this.params.splat[0];
                module = fileter.includes(module) ? module : fileter[0];

                self.container({
                    name    : self.data.mapping.getJS(module),
                    template: self.data.mapping.getTemp(module),
                    data    : {
                    parent  : self,
                    data    : self.data
                },
                afterRender: function (){
                    ko.utils.triggerEvent(document.body, "pageReady");
                        self.loading(false);
                    }
                });
            });

            this.get(self.data.appUrl, function () {
                this.app.runRoute("get", `#/${fileter[0]}`);
            });
        });

        Sammy().run();

        if (self.data.test) {
            window.main = self;
        }
    };
});
