'use strict';

define(["knockout", "Tools"], function (ko, Tools) {
    ko.components.register('ko-navigation', {
        viewModel: function (params) {
            this.type = params.type;

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
            <div class="ui fixed inverted menu mymenu">
                <a href="/" class="header item">NF</a>
                <a class="active item">菜单管理</a>
                <a class="item">Link</a>
                <div class="ui simple dropdown item">
                    培训内容 <i class="dropdown icon"></i>
                    <div class="menu">
                        <div class="item">
                            <i class="dropdown icon"></i>
                            框架培训
                            <div class="menu">
                                <div class="header">KnockoutJS</div>
                                <a href="/demos#/basic/case1" class="item">基本用法</a>
                                <a href="/demos#/basic/case2" class="item">列表用法</a>
                                <a href="/demos#/handlers/case3" class="item">自定义标签</a>
                                <a href="/demos#/plugin/ko-mapping" class="item">ko-mapping</a>
                                <a href="/demos#/plugin/ko-switch-case" class="item">ko-switch-case</a>
                                <a href="/demos#/plugin/ko-validation" class="item">ko-validation</a>
                                <a href="/demos#/plugin/ko-date-helpers" class="item">ko-date-helpers</a>
                                <a href="/demos#/plugin/ko-amd-helpers" class="item">ko-amd-helpers</a>
                                <div class="divider"></div>
                                <div class="divider"></div>
                                <div class="header">RequireJS</div>
                                <div class="divider"></div>
                                <div class="divider"></div>
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
                    <a class="item" data-bind="click: logout">退出系统</a>
                </div>
            </div>
            `;
        }()
    });
});
