'use strict';

define(["knockout", "navigation", "footer"], function (ko) {
    ko.components.register('ko-layout', {
        viewModel: function (params) {
            this.viewport = params.context.viewport;
            this.container = params.context.container;
        },
        template: function () {
            return `
            <!-- Application 初始化前 -->
            <!-- ko if: viewport() == 'login' -->
            <div class="login_container" data-bind="module: container"></div>
            <ko-footer></ko-footer>
            <!-- /ko -->

            <!-- 全屏模式 -->
            <!-- ko if: viewport() == 'full' -->
            <!-- ko module: container --><!-- /ko -->
            <!-- /ko -->

            <!-- 大区域模式 -->
            <!-- ko if: viewport() == 'big' -->
            <ko-navigation></ko-navigation>
            <!-- ko module: container --><!-- /ko -->
            <ko-footer></ko-footer>
            <!-- /ko -->

            <!-- 普通模式 -->
            <!-- ko if: viewport() == 'normal' -->
            <ko-navigation></ko-navigation>
            <!-- ko module: container --><!-- /ko -->
            <ko-footer></ko-footer>
            <!-- /ko -->
            `;
        }()
    });
});
