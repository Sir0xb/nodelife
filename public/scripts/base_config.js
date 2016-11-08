require.config({
    baseUrl: "/",
    paths  : {
        // 基础库
        "jquery"            : "lib/jquery/1.9.1/dist/jquery.min",
        "knockout"          : "lib/knockout/3.4.0/knockout.min",

        // 基础库扩展
        "ko-amd"            : "lib/knockout-amd-helpers/0.7.4/dist/knockout-amd-helpers.min",

        // 其他插件
        "sammy"             : "lib/sammy/0.7.6/dist/sammy.min",
        "sweetalert"        : "lib/sweetalert/sweetalert-2/sweetalert.min",
        "mock"              : "lib/mockjs/1.0.1/mock-min",
        "text"              : "lib/requirejs-plugins/text",
        "semantic"          : "lib/semantic/semantic-2.2.6/semantic.min",

        // 项目自有库
        "Tools"             : "scripts/tools/tools",
        "Super"             : "scripts/tools/super",

        // 依赖样式
        "sweetalert-css"    : "lib/sweetalert/sweetalert-2/sweetalert"
    },
    shim   : {
        "semantic"      : ["jquery"],
        "sammy"         : ["jquery", "text"],
        "sweetalert"    : ["css!sweetalert-css"],
        "ko-amd"        : ["knockout"]

        // "ko-mapping"    : ["knockout"],
        // "ko-switch"     : ["knockout"],
        // "ko-validation" : ["knockout"],
        // "ko-datepicker" : ["knockout", "jquery", "jquery-ui", "css!jquery-ui-css"],
        // "ko-date"       : ["knockout", "moment"],
        // "ko-error"      : ["knockout"],
        // "ko-hover"      : ["knockout", "jquery"],
        // "ko-textcut"    : ["knockout", "jquery"],
        // "YQplayer"      : ["jquery", "jplayer", "css!YQplayer-css"],
        // "uploader"      : ["jquery"]
    },
    map: {
        "*": {
            "css"   : "lib/requirejs-plugins/css-0.1.8.js",
            "json"  : "lib/requirejs-plugins/json-0.4.0.js"
        }
    }
});
