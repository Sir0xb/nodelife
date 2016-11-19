'use strict';

define(["knockout", "Super", "sammy", "marked", "hljs"], function (ko, Super, Sammy, marked, highlight) {
    return function (context) {
        var self = Super.call(this, context);

        self.viewport("normal");

        Sammy(function () {
            let fileter = [
                'basic/case1',
                'basic/case2',
                'handlers/case3',
                'plugin/ko-amd-helpers.js',
                'plugin/ko-date-helpers.js',
                'plugin/ko-mapping.js',
                'plugin/ko-switch-case.js',
                'plugin/ko-validation.js',
            ];

            this.get(self.data.appUrl, function () {
                this.app.runRoute("get", `#/${fileter[0]}`);
            });

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

                        $('code').each(function(i, block) {
                            hljs.highlightBlock(block);
                        });
                    }
                });
            });
        });

        Sammy().run();

        if (self.data.test) {
            window.main = self;
        }
    };
});
