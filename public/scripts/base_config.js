require.config({
    baseUrl: "/public",
    paths  : {
        // 基础库
        "jquery"            : "lib/jquery-1.9.1.min",
        "knockout"          : "lib/knockout-3.4.0.min",

        // 基础库扩展
        "ko-amd"            : "lib/knockout-amd-helpers/knockout-amd-helpers.min",

        // 其他插件
        "sammy"             : "lib/sammy-0.7.6",
        "text"              : "lib/text",
        "sweetalert"        : "lib/sweetalert-2/sweetalert.min",
        "mock"              : "lib/mock-min",

        // 项目自有库
        "Tools"             : "/lib/tools/tools",
        "Super"             : "/lib/tools/super",

        // 依赖样式
        "sweetalert-css"    : "lib/sweetalert-2/sweetalert"
    },
    shim   : {
        "sammy"         : ["jquery", "text"],
        "sweetalert"    : ["css!sweetalert-css"]
    },
    map: {
        "*": {
            "css"   : "lib/requirejs-plugins/css-0.1.8.js",
            "json"  : "lib/requirejs-plugins/json-0.4.0.js"
        }
    }
});
