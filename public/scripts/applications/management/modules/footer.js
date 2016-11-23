'use strict';

define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context);

        self.siteList = ko.observableArray(
            ko.mapping.fromJS(self.data.siteList)()
        );

        self.wind = ko.observable({});

        self.add = function () {
            self.wind({
                name    : self.data.mapping.getJS('footerEditor'),
                template: self.data.mapping.getTemp('footerEditor'),
                data    : {
                    parent      : self,
                    data        : self.data,
                    type        : 'add',
                    siteInfo    : {
                        site : '',
                        url  : ''
                    }
                },
                afterRender: function (){
                    $("#footerEditor").modal("show");
                }
            });
        };

        self.edit = function () {
            self.wind({
                name    : self.data.mapping.getJS('footerEditor'),
                template: self.data.mapping.getTemp('footerEditor'),
                data    : {
                    parent      : self,
                    data        : self.data,
                    type        : 'edit',
                    siteInfo    : ko.mapping.toJS(this)
                },
                afterRender: function (){
                    $("#footerEditor").modal("show");
                }
            });
        };

        self.delete = function () {
            let info = this;

            self.sweet({
                title             : "Are you sure?",
                text              : "确定要删除吗？",
                type              : "warning",
                showCancelButton  : true,
                cancelButtonText  : "取消",
                confirmButtonText : "确定",
                closeOnConfirm    : false,
                closeOnCancel     : true
            }, function(isConfirm){
                if (isConfirm) {
                    Tools.ajax({
                        url    : "/event/footer/delete",
                        data   : {
                            id : info._id()
                        },
                        success: function (returnData) {
                            if (returnData.success) {
                                self.siteList.remove(info);
                                self.sweet("Deleted!", "删除成功!", "success");
                            } else {
                                self.sweet("Wrong!", returnData.message, "error");
                            }
                        }
                    });
                }
            });
        };

        if (self.data.test) {
            window.footer = self;
        }
    };
});
