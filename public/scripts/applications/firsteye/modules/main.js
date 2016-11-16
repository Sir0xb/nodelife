define(["knockout", "Super", "sammy"], function (ko, Super, Sammy) {
    return function (context) {
        var self = Super.call(this, context);

        self.viewport("normal");

        Sammy(function () {
            this.get(/\#\/([\s\S]*)/, function (){
                var module = this.params.splat[0];

                self.container({
                    name    : self.data.mapping.getJS(module),
                    template: self.data.mapping.getTemp(module),
                    data    : {
                        parent  : self,
                        data    : self.data
                    },
                    afterRender: function (){
                        ko.utils.triggerEvent(document.body, "pageReady");
                    }
                });
            });

            this.get(self.data.appUrl, function () {
                this.app.runRoute("get", "#/list");
            });
        });

        Sammy().run();

        if (self.data.test) {
            main = self;
        }
    };
});
