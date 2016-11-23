'use strict';

define(["knockout", "Super", "Tools"], function (ko, Super, Tools) {
    return function (context) {
        var self = Super.call(this, context);

        self.siteInfo = ko.observable(
            ko.mapping.fromJS(context.siteInfo)
        );
        self.type = context.type;

        self.save = function () {
            Tools.ajax({
                url    : "/event/footer/update",
                data   : {
                    siteInfo: ko.mapping.toJS(self.siteInfo)
                },
                success: function (returnData) {
                    if (returnData.success) {
                        if (self.type == 'add') {
                            self.parent.siteList.push(ko.mapping.fromJS(returnData.info));
                        } else {
                            let _iteInfo = ko.utils.arrayFirst(self.parent.siteList(), function (info) {
                                return info._id() == self.siteInfo()._id();
                            });
                            _iteInfo.site(self.siteInfo().site());
                            _iteInfo.url(self.siteInfo().url());
                        }
                        $("#footerEditor").modal("hide");
                    } else {
                        self.sweet("Wrong!", returnData.message, "error");
                    }

                }
            });
        };

        if (self.data.test) {
            window.footerEditor = self;
        }
    };
});
