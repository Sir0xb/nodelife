/**
 *  @date 2016-04-19 08:01:32
 *  @update 2016-04-25 18:36:03
 *  @auto liluwei
 *  @description 该模块主要负责全局的ajax事件捕获
 */

(function(){

	"use strict";

	var win = window,
		noop = function(){},
		log = win.log || noop,
		doExternal = (win._17M || {}).doExternal || noop;

	var io = function($){

		// ajax global setting
		$.ajaxSetup(
			{
				cache   : false,  // 所有的ajax 不要缓存
				timeout : 25 * 1000  // 因为我们面对的是移动用户，因此将最大延迟时间设置为 25s
			}
		);

		// 用来辅助缓存ajax
		var cacheAjaxUrls = {
		};

		var $wait_loading ;

		return function(url, data, type, options) {

			type = (type || 'GET').toUpperCase();

			var opts =  $.extend(
				{
					url: url,
					data: data,
					type: type,
					seq : type === "POST",
					dataType: "json"
				},
				options
			);

			if(opts.freeze_ms){

				var start_time = new Date().getTime(),
					freeze_key = url + 'freeze_ms';

				if( start_time - cacheAjaxUrls[freeze_key] < opts.freeze_ms){
					console.log('两次请求间隔太短\n url : %s \n opts: %j ', url, opts);
					return ;
				}

				cacheAjaxUrls[freeze_key] = start_time;
			}

			if(opts.seq){

				if(cacheAjaxUrls[url] === "loading" ){
					console.log('请等待相同url的上一个请求结束\n url : %s \n opts: %j ', url, opts);
					return  ;
				}

				cacheAjaxUrls[url] = "loading";
			}

			if(opts.loading && !$wait_loading){
				if(!$wait_loading){
					$(".wait_loading").length === 0 &&
					$('body').append('<div class="loading wait_loading"><span class="icon"></span></div>');

					$wait_loading = $(".wait_loading");
				}

				$wait_loading[0].style.display = "block";
			}

			return $.ajax(opts)
					.done(function(res){
						var success = 'success' in res ? res.success : res.result === "success";

						if(!success){

							log(
								{
									logs : ['ajax 返回逻辑出错 调用参数 %j, 出错信息 %j', opts, arguments],
									op : "ajax"
								},
								"error"
							);

							if(+res.errorCode === 900){

								if(!doExternal( "redirectLogin", "" )){
									win.location.href = "/";
								}

								return ;
							}

						}
					})
					.fail(function (res, status, error) {
						log(
							{
								logs : ['ajax 物理出错 调用参数 %j, 出错信息 %j', opts, arguments],
								op : "ajax"
							},
							"error"
						);
						error === "timeout" && win.alert("服务器正忙，请稍后重试!");
					})
					.always(function(){
						opts.seq && (cacheAjaxUrls[url] = null);
						opts.loading && ($wait_loading[0].style.display = "none");
					});
		};
	};


	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], io);
	} else if (typeof exports === 'object') {
		// CMD, CommonJS之类的
		module.exports = io(require('jquery'));
	}else{
		win.io = io(win.jQuery);
	}

})();
