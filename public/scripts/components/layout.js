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
            <!-- ko if: ['big', 'normal'].indexOf(viewport()) != -1 -->
            <!-- ko component: 'ko-navigation' --><!-- /ko -->
            <!-- /ko -->

            <div class="ui main container mycontainer" data-bind="css: { login_container: viewport() == 'login' }">
                <div data-bind="module: container"></div>
            </div>

            <!-- ko if: ['login', 'big', 'normal'].indexOf(viewport()) != -1 -->
            <!-- ko component: { name: 'ko-footer', params: { siteList: data.siteList } } --><!-- /ko -->
            <!-- /ko -->
            `;
        }()
    });
});
