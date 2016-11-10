'use strict';

define(["knockout"], function (ko) {
    ko.components.register('ko-navigation', {
        viewModel: function (params) {
            this.type = params.type;
        },
        template: function () {
            return `
            <div class="ui fixed inverted menu">
                <div class="header item">NF</div>
                <a class="active item">菜单管理</a>
                <a class="item">Link</a>
                <div class="ui dropdown item" tabindex="0">
                    Dropdown
                    <i class="dropdown icon"></i>
                    <div class="menu transition hidden" tabindex="-1">
                        <div class="item">Action</div>
                        <div class="item">Another Action</div>
                        <div class="item">Something else here</div>
                        <div class="divider"></div>
                        <div class="item">Separated Link</div>
                        <div class="divider"></div>
                        <div class="item">One more separated link</div>
                    </div>
                </div>
                <div class="right menu">
                    <a class="item">退出系统</a>
                </div>
            </div>
            `;
        }()
    });
});
