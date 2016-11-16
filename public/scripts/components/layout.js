'use strict';

define(["knockout", "lodash", "ko-amd", "navigation", "footer"], function (ko, _) {
    ko.components.register('ko-layout', {
        viewModel: function (params) {
            var self = _.extend(this, params.context);

            self.container({
                name     : self.data.mapping.getJS("main"),
                template : self.data.mapping.getTemp("main"),
                data     : {
                    parent : self,
                    data   : self.data
                },
                afterRender: function (){
                    ko.utils.triggerEvent(document.body, "pageReady");
                    self.loading(false);
                }
            });
        },
        template: function () {
            return `
            <!-- 显示 navigation -->
            <!-- ko if: ['big', 'normal'].indexOf(viewport()) != -1 -->
            <ko-navigation></ko-navigation>
            <!-- /ko -->

            <div data-bind="module: container, attr: { class: vpStyle() + ' mycontent' }"></div>

            <!-- 显示 footer -->
            <!-- ko if: ['login', 'big', 'normal'].indexOf(viewport()) != -1 -->
            <ko-footer></ko-footer>
            <!-- /ko -->
            `;
        }()
    });
});
