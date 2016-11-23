define(["knockout"], function(ko) {
    var head = function (page, total, method) {
        var result = '';
        result += '<!-- ko if: ' + page + '() == 0 -->';
        result += '<a class="icon item" data-bind="css: { \'disabled\': ' + page + '() == 0 }"><i class="left chevron icon"></i></a>';
        result += '<!-- /ko -->';
        result += '<!-- ko ifnot: ' + page + '() == 0 -->';
        result += '<a class="icon item" data-bind="click: ' + method + '.bind($data, ' + page + '() - 1)"><i class="left chevron icon"></i></a>';
        result += '<!-- /ko -->';

        return result;
    };

    var node = function (page, total, method) {
        return function () {
            var result = '';
            result += '<!-- ko if: ' + total + '() < 13 -->';
            result += '  <!-- ko foreach: (function(total){ var result = []; for(var i = 0; i < total(); i++){ result.push(i) } return result; }(' + total + ')) -->';
            result += '    <a class="item" data-bind="css: { \'active\': $data == $parent.' + page + '() }, click: $parent.' + method + '.bind($data, $data), text: $data + 1"></a>';
            result += '  <!-- /ko -->';
            result += '<!-- /ko -->';

            result += '<!-- ko ifnot: ' + total + '() < 13 -->';

            result += '  <!-- ko if: ' + page + '() < 6 -->';
            result += '    <!-- ko foreach: (function(){ var result = []; for(var i = 0; i < Math.max(5, ' + page + '() + 2); i++){ result.push(i) } return result; }()) -->';
            result += '      <a class="item" data-bind="css: { \'active\': $data == $parent.' + page + '() }, click: $parent.' + method + '.bind($data, $data), text: $data + 1"></a>';
            result += '    <!-- /ko -->';
            result += '    <a class="item">...</a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, ' + total + '() - 3), text: ' + total + '() - 2"></a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, ' + total + '() - 2), text: ' + total + '() - 1"></a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, ' + total + '() - 1), text: ' + total + '() - 0"></a>';
            result += '  <!-- /ko -->';

            result += '  <!-- ko if: ' + page + '() >= ' + total + '() - 7 -->';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, 0)">1</a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, 1)">2</a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, 2)">3</a>';
            result += '    <a class="item">...</a>';
            result += '    <!-- ko foreach: (function(){ var result = []; for(var i = Math.min(' + total + '() - 4, ' + page + '() - 2); i < ' + total + '() - 1; i++){ result.push(i) } return result; }()) -->';
            result += '      <a class="item" data-bind="css: { \'active\': $data == $parent.' + page + '() }, click: $parent.' + method + '.bind($data, $data), text: $data + 1"></a>';
            result += '    <!-- /ko -->';
            result += '  <!-- /ko -->';

            result += '  <!-- ko ifnot: ' + page + '() < 6 -->';
            result += '  <!-- ko ifnot: ' + page + '() >= ' + total + '() - 7 -->';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, 0)">1</a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, 1)">2</a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, 2)">3</a>';
            result += '    <a class="item">...</a>';
            result += '    <!-- ko foreach: (function(){ var result = []; for(var i = ' + page + '() - 2; i <= ' + page + '() + 2; i++){ result.push(i) } return result; }()) -->';
            result += '      <a class="item" data-bind="css: { \'active\': $data == $parent.' + page + '() }, click: $parent.' + method + '.bind($data, $data), text: $data + 1"></a>';
            result += '    <!-- /ko -->';
            result += '    <a class="item">...</a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, ' + total + '() - 3), text: ' + total + '() - 2"></a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, ' + total + '() - 2), text: ' + total + '() - 1"></a>';
            result += '    <a class="item" data-bind="click: ' + method + '.bind($data, ' + total + '() - 1), text: ' + total + '() - 0"></a>';
            result += '  <!-- /ko -->';
            result += '  <!-- /ko -->';

            result += '<!-- /ko -->';
            return result;
        };
    };

    var tail = function (page, total, method) {
        var result = '';
        result += '<!-- ko if: ' + page + '() + 1 == ' + total + '() -->';
        result += '<a class="icon item" data-bind="css: { \'disabled\': ' + page + '() + 1 == ' + total + '() }"><i class="right chevron icon"></i></a>';
        result += '<!-- /ko -->';
        result += '<!-- ko ifnot: ' + page + '() + 1 == ' + total + '() -->';
        result += '<a class="icon item" data-bind="click: ' + method + '.bind($data, ' + page + '() + 1)"><i class="right chevron icon"></i></a>';
        result += '<!-- /ko -->';
        return result;
    };

    ko.bindingHandlers.pagination = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var page = valueAccessor().page;
            var total = valueAccessor().total;
            var method = valueAccessor().method;

            var $el = $(element);

            $el.html(head(page, total, method));
            $el.append(node(page, total, method));
            $el.append(tail(page, total, method));
        }
    };
});
