﻿    var myUrl = encodeURIComponent(location.href.split('#')[0]);    //自动获得本网页的url
    console.log(myUrl);
	
		
    $.getJSON('//wx.chubao.cn/getwxconf?url='+myUrl+'&callback=?', function(remoteData){
	   //向服务器发送请求，获得signature
	 wx.config({
	    debug: true, // 开启或关闭调试模式,调用的所有api的返回值会在客户端alert出来
	    appId: remoteData.appId, // 必填，公众号的唯一标识
	    timestamp: remoteData.timestamp, // 必填，生成签名的时间戳
	    nonceStr: remoteData.nonceStr, // 必填，生成签名的随机串
	    signature: remoteData.signature,// 必填，签名，见附录1
	    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
     });
	 wx.ready(function(){
	  wx.onMenuShareTimeline({
		title: '根据提示猜中明星就有红包拿！仅限前1000个，快来看看', // 分享标题
		link: 'http://www.chubao.cn/s/20151102w/index.html',
		imgUrl: "http://www.chubao.cn/s/20151102w/images/wx.jpg", // 分享图标，需替换为图片地址
		success: function () {
			_hmt.push(['_trackEvent', "guess2W", "guess2WShareToTimeLineSuccess"]);
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数，需要时选填
		}
	   });
	  wx.onMenuShareAppMessage({
		title: '根据提示猜中明星就有红包拿！仅限前1000个，快来看看', // 分享标题
		desc: '大明星红包，据说拿了会红', // 分享描述
		link: 'http://www.chubao.cn/s/20151102w/index.html',
		imgUrl: "http://www.chubao.cn/s/20151102w/images/wx.jpg", // 分享图标，需替换为图片地址
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () {
			 _hmt.push(['_trackEvent', "guess2W", "guess2WShareToFriendSuccess"]);
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数，需要时选填
		}
	  });
   });
   wx.error(function(res){
      
	// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

   });
	 
   });
	