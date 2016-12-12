'use strict';

define(["knockout", "lodash", "Tools"], function (ko, _, Tools) {
    ko.components.register('ko-navigation', {
        viewModel: function (params) {
            var self = _.extend(this, params);

            self.backToMain = function () {
                location.href = "/";
            };

            self.appJump = function (link) {
                location.href = link;
            };

            self.logout = function () {
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

            _.extend(params, {
                logout: self.logout
            });
        },
        template: function () {
            return `
            <div class="ui fixed inverted menu">
                <div class="ui container">
                    <a class="header item" data-bind="click: backToMain">NodeLife</a>
                    <a class="item">xxx</a>
                    <div class="ui simple dropdown item">
                        培训内容 <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">
                                <i class="dropdown icon"></i>
                                框架培训
                                <div class="menu">
                                    <div class="header">KnockoutJS</div>
                                    <a class="item" data-bind="css: { action: location.pathname + location.hash == '#/basic/case1' }, click: appJump.bind($data, '#/basic/case1')">基本用法</a>
                                    <a class="item" data-bind="css: { action: location.pathname + location.hash == '#/basic/case2' }, click: appJump.bind($data, '#/basic/case2')">列表用法</a>
                                    <a class="item" data-bind="css: { action: location.pathname + location.hash == '#/handlers/case3' }, click: appJump.bind($data, '#/handlers/case3')">自定义标签</a>
                                    <a class="item" data-bind="css: { action: location.pathname + location.hash == '#/plugin/ko-mapping' }, click: appJump.bind($data, '#/plugin/ko-mapping')">ko-mapping</a>
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
                            <div class="item" data-bind="css: { action: location.pathname + location.hash == '/management#/menu' }, click: appJump.bind($data, '/management#/menu')">菜单设置</div>
                            <div class="item" data-bind="css: { action: location.pathname + location.hash == '/management#/footer' }, click: appJump.bind($data, '/management#/footer')">Footer设置</div>
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
