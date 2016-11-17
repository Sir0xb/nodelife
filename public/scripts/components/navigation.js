'use strict';

define(["knockout", "Tools"], function (ko, Tools) {
    ko.components.register('ko-navigation', {
        viewModel: function (params) {
            this.backToMain = function () {
                location.href = "/";
            };

            this.appJump = function (link) {
                location.href = link;
            };

            this.logout = function () {
                Tools.ajax({
                    url    : "/event/logout",
                    success: function (returnData) {
                        console.info(returnData);

                        if (returnData.success) {
                            location.href = "/";
                        }
                    }
                });
            };
        },
        template: function () {
            return `
            <div class="ui fixed inverted menu">
                <div class="ui container">
                    <a class="header item" data-bind="click: backToMain">NodeLife</a>
                    <a class="active item">菜单管理</a>
                    <a class="item">Link</a>
                    <div class="ui simple dropdown item">
                        Dropdown
                        <i class="dropdown icon"></i>
                        <div class="menu transition" tabindex="-1">
                            <div class="item">Action</div>
                            <div class="item">Another Action</div>
                            <div class="item">Something else here</div>
                            <div class="divider"></div>
                            <div class="item">Separated Link</div>
                            <div class="divider"></div>
                            <div class="item">One more separated link</div>
                        </div>
                    </div>
                    <div class="ui simple dropdown item">
                        培训内容 <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">
                                <i class="dropdown icon"></i>
                                框架培训
                                <div class="menu">
                                    <div class="header">KnockoutJS</div>
                                    <a class="item" data-bind="click: appJump.bind($data, '/demos#/basic/case1')">基本用法</a>
                                    <a class="item" data-bind="click: appJump.bind($data, '/demos#/basic/case2')">列表用法</a>
                                    <a class="item" data-bind="click: appJump.bind($data, '/demos#/handlers/case3')">自定义标签</a>
                                    <a class="item" data-bind="click: appJump.bind($data, '/demos#/plugin/ko-mapping')">ko-mapping</a>
                                </div>
                            </div>
                            <div class="item">
                                <i class="dropdown icon"></i>
                                工具培训
                                <div class="menu">
                                    <div class="header">Atom</div>
                                    <div class="divider"></div>
                                    <div class="divider"></div>
                                    <div class="header">IntelliJ IDEA</div>
                                    <div class="divider"></div>
                                    <div class="divider"></div>
                                    <div class="header">PyCharm</div>
                                    <div class="divider"></div>
                                    <div class="divider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui simple dropdown item">
                        系统设置 <i class="dropdown icon"></i>
                        <div class="menu transition">
                            <div class="item">用户管理</div>
                            <div class="divider"></div>
                            <div class="item" data-bind="click: appJump.bind($data, '/management#/menu')">菜单设置</div>
                            <div class="item" data-bind="click: appJump.bind($data, '/management#/footer')">Footer设置</div>
                        </div>
                    </div>
                    <div class="right menu">
                        <a class="item" data-bind="click: logout">退出系统</a>
                    </div>
                </div>
            </div>
            `;
        }()
    });
});
