'use strict';

define(["knockout", "navigation"], function (ko) {
    ko.components.register('ko-footer', {
        viewModel: function (params) {
            this._type = params.type;
        },
        template: function () {
            return `
            <div class="ui inverted vertical footer segment">
                <div class="ui center aligned container">
                    <div class="ui horizontal inverted small divided link list">
                        <a class="item" target="_blank" href="http://www.17zuoye.com/">一起作业网</a>
                        <a class="item" target="_blank" href="http://tiku.17zuoye.net/">一起作业题库系统</a>
                        <a class="item" target="_blank" href="http://wiki.17zuoye.net/">一起作业维基系统</a>
                    </div>
                </div>
            </div>
            `;
        }()
    });
});
