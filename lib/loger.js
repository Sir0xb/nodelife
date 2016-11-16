'use strict';

// 日志工具
module.exports = function (req, type, state) {
    console.info(`==> ${type} | ${state ? "放行" : "禁止" } | ${req.session.user} | ${req.url}`);
};
