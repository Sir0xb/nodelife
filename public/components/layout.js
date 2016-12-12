'use strict';

define(["knockout", "lodash", "sammy", "ko-amd", "navigation", "footer"], function (ko, _, Sammy) {
    ko.components.register('ko-layout', {
        viewModel: function (params) {
            let self = Object.assign(this, params);

            Sammy(function () {
                this.helpers({
                    remake: function (context, { vp = 'normal', key, value = key }) {
                        if (!self.data.isLogin && !['login', 'register'].includes(key)) {
                            vp = 'login';
                            key = 'login';
                            value = 'login';
                        }
                        if (self.data.isLogin && ['login', 'register'].includes(key)) {
                            vp = 'normal';
                            key = 'welcome';
                            value = 'welcome';
                        }

                        context.viewport(vp);
                        context.container({
                            name     : context.data.mapping.getJS(key),
                            template : context.data.mapping.getTemp(value),
                            data     : {
                                parent : context,
                                data   : context.data
                            },
                            afterRender: function (){
                                context.loading(false);
                            }
                        });
                        return false;
                    }
                });

                this.mapRoutes([
                    ['#/login',                 function () { this.remake(self, { vp: 'login',  key: 'login'    }); }],
                    ['#/register',              function () { this.remake(self, { vp: 'login',  key: 'register' }); }],
                    ['#/basic/case1',           function () { this.remake(self, { key: 'basic/case1' }); }],
                    ['#/basic/case2',           function () { this.remake(self, { key: 'basic/case2' }); }],
                    ['#/handlers/case3',        function () { this.remake(self, { key: 'handlers/case3' }); }],
                    ['#/plugin/ko-mapping',     function () { this.remake(self, { key: 'plugin/ko-mapping' }); }],
                    ['#/welcome',               function () { this.remake(self, { key: 'welcome' }); }],
                    ['#/',                      function () { this.remake(self, { key: 'welcome' }) }],
                    ['/',                       function () { this.app.runRoute("get", "#/"); }]
                ]);
            });

            Sammy().run();
        },
        template: function () {
            return `
            <!-- ko if: ['big', 'normal'].indexOf(viewport()) != -1 -->
            <!-- ko component: { name: 'ko-navigation', params: $data } --><!-- /ko -->
            <!-- /ko -->

            <div class="ui main container mycontainer" data-bind="css: { login_container: viewport() == 'login' }">
                <div data-bind="module: container"></div>
            </div>

            <!-- ko if: ['login', 'big', 'normal'].indexOf(viewport()) != -1 -->
            <!-- ko component: { name: 'ko-footer', params: $data } --><!-- /ko -->
            <!-- /ko -->
            `;
        }()
    });
});
