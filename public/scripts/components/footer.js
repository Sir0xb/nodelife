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
                        <a class="item" target="_blank" href="https://boliball.com/">Boliball</a>
                        <a class="item" target="_blank" href="http://www.knockmeout.net/">Knockmeout</a>
                        <a class="item" target="_blank" href="http://www.worldwildlife.org/">WWF</a>
                    </div>
                </div>
            </div>
            `;
        }()
    });
});
