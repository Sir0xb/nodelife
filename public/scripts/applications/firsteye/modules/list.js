'use strict';

define(["knockout", "Super", "ko-pages"], function (ko, Super) {
    return function (context) {
        var self = Super.call(this, context);

        self.studentId = ko.observable('');
        self.studentName = ko.observable('');
        self.parentMobile = ko.observable('');

        self.userStateList = ko.observableArray([{
            code: 0,
            desc: '全选'
        }, {
            code: 1,
            desc: '呵呵'
        }]);
        self.state = ko.observable('');

        self.userList = ko.observableArray(
            ko.mapping.fromJS([{
                studentId   : 0,
                studentName : 'hehe1',
                parentId    : 1,
                parentName  : 'hehebaba'
            }, {
                studentId   : 1,
                studentName : 'hehe1',
                parentId    : 2,
                parentName  : 'hehebaba'
            }, {
                studentId   : 3,
                studentName : 'hehe1',
                parentId    : 4,
                parentName  : 'hehebaba'
            }, {
                studentId   : 5,
                studentName : 'hehe1',
                parentId    : 6,
                parentName  : 'hehebaba'
            }])()
        );

        self.edit = function () {
            this.studentId(this.studentId() * 10);
            this.parentId(this.parentId() * 10);
        };

        self.total = ko.observable(3);
        self.page = ko.observable(1);
        self.search = function (page) {
            console.info("This is xxx message");
            console.info(page);
            self.page(page);
        };

        self.detaile = function () {
            self.parent.container({
                name    : self.data.mapping.getJS('detaile'),
                template: self.data.mapping.getTemp('detaile'),
                data    : {
                    parent  : self.parent,
                    data    : self.data,
                    info    : this,
                    hehe    : 'wuhaha'
                },
                afterRender: function (){
                    ko.utils.triggerEvent(document.body, "pageReady");
                }
            });
        };

        if (self.data.test) {
            window.list = self;
        }
    };
});
