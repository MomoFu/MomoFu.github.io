



 
 Zepto(function($){
	var paras = new Object() ;
	paras = GetRequest() ;
	//alert(paras["bonus_id"]); 

    var myUrl = encodeURIComponent(location.href.split('#')[0]);    //自动获得本网页的url
    console.log(myUrl);
	/*
	if(isWeiXin()){	
    $.getJSON('//wx.chubao.cn/getwxconf?url='+myUrl+'&callback=?', function(remoteData){
	   //向服务器发送请求，获得signature
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
		title: '有红包！速来！棉花糖&触宝电话福利大派送~', // 分享标题
		link: 'http://www.chubao.cn/s/20150923mht/index.html', // 分享链接，必填
		imgUrl: 'http://www.chubao.cn/s/20150923mht/img2/icon.png', // 分享图标，需替换为图片地址
		success: function () {
			_hmt.push(['_trackEvent', "allen", "allenShareToTimeLineSuccess"]);
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数，需要时选填
		}
	   });
	  wx.onMenuShareAppMessage({
		title: '有红包！速来！棉花糖&触宝电话福利大派送~', // 分享标题
		desc: '出国打电话不花钱的秘密，戳！', // 分享描述
		link: 'http://www.chubao.cn/s/20150923mht/index.html',
		imgUrl: 'http://www.chubao.cn/s/20150923mht/img2/icon.png', // 分享图标，需替换为图片地址
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () {
			 _hmt.push(['_trackEvent', "allen", "allenShareToFriendSuccess"]);
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
	}
    */
    $('.downBtn').on('click', function(){
		console.log("me");
		_hmt.push(['_trackEvent', "allen", "allenClickDownloadApp"]);
			var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if( isAndroid  )
				_hmt.push(['_trackEvent', "allen", "allenClickDownloadAppAndroid"]);
			if( isiOS  )
				_hmt.push(['_trackEvent', "allen", "allenClickDownloadAppIOS"]);
		
		
		
				
		
		setTimeout( function(){
			
			$('.downBtn').removeClass('active');
			

		    window.location.href = "http://dialer.cdn.cootekservice.com/web/external/laststep/index.html?code=mkt_le_mianhuatang_20150923";
		}, 100)
		
		
	});
	
	
	
	
    if( paras["phone"] ){
		
		$('.phone').html(paras["phone"]);
	}
	
	if(paras['fresh'] != null){
		if(paras['fresh'] == 1)
			
			$('#minutes').html('650');
		else
			$('#minutes').html('150');
	}
	
	
    


})