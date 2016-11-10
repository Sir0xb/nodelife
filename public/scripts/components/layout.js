'use strict';

define(["knockout", "navigation", "footer"], function (ko) {
    ko.components.register('ko-layout', {
        viewModel: function (params) {
            this._type = params.type;
            this.container = ko.observable({});
        },
        template: function () {
            // return `
            // <ko-navigation params="type: _type"></ko-navigation>
            return `
            <div class="login_container" data-bind="module: container"></div>
            <ko-footer></ko-footer>
            `;
        }()
    });
});
