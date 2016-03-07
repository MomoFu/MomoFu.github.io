    
  function initWX(name,imgLink, u){
	var myUrl = encodeURIComponent(location.href.split('#')[0]);    //自动获得本网页的url
    console.log(myUrl);
	var me = '猜猜哪个字是'+name+'写的';
	var desc = '据说真爱都能认出我的字';
	
	//if(ua.weixin){	
    $.getJSON('//wx.chubao.cn/getwxconf?url='+myUrl+'&callback=?', function(remoteData){
	   //向服务器发送请求，获得signature
	   console.log('wx init over');
	 wx.config({
	    debug: false, // 开启或关闭调试模式,调用的所有api的返回值会在客户端alert出来
	    appId: remoteData.appId, // 必填，公众号的唯一标识
	    timestamp: remoteData.timestamp, // 必填，生成签名的时间戳
	    nonceStr: remoteData.nonceStr, // 必填，生成签名的随机串
	    signature: remoteData.signature,// 必填，签名，见附录1
	    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
     });
	 wx.ready(function(){
	  wx.onMenuShareTimeline({
		title: me, // 分享标题
		link: 'http://zhcn.web.cdn.cootekservice.com/s/Mwrite/index.html?u='+u,
		imgUrl: imgLink, // 分享图标，需替换为图片地址
		success: function () {
			//$('.wxContainer').css('visibility', 'visible');
			
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatShareToTimeLineSuccess"]);
			window.location.href = "http://jump.luna.58.com/s?spm=m-25628932496135-ms-f-803&ch=fangchan_0128";
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数，需要时选填
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatShareToTimeLineCancel"]);
			//window.location.href = "http://www.chubao.cn/s/eventhall/index.html?v=11";
			window.location.href = "http://jump.luna.58.com/s?spm=m-25628932496135-ms-f-803&ch=fangchan_0128";
		}
	   });
	  wx.onMenuShareAppMessage({
		title: me, // 分享标题
		desc: desc, // 分享描述
		link: 'http://zhcn.web.cdn.cootekservice.com/s/Mwrite/index.html?u='+u,
		imgUrl: imgLink, // 分享图标，需替换为图片地址
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () {
			//$('.wxContainer').css('visibility', 'visible');
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatShareToFriendSuccess"]);
			
			window.location.href = "http://jump.luna.58.com/s?spm=m-25628932496135-ms-f-803&ch=fangchan_0128";
			 
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数，需要时选填
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatShareToFriendCancel"]);
			window.location.href = "http://jump.luna.58.com/s?spm=m-25628932496135-ms-f-803&ch=fangchan_0128";
			//window.location.href = "http://www.chubao.cn/s/eventhall/index.html?v=11";
		}
	  });
   });
   wx.error(function(res){
      
	// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

   });
	 
   });
	//}
  }
  