



 
 Zepto(function($){
	var paras = new Object() ;
	paras = GetRequest() ;
	//alert(paras["bonus_id"]); 

   
    
    $('#openBtn').on('click', function(){
		console.log("me");
		$('#openBtn').addClass('active');
		_hmt.push(['_trackEvent', "emily_160111", "emily_160111ClickDownloadApp"]);
			var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			if( isAndroid  )
				_hmt.push(['_trackEvent', "emily_160111", "emily_160111ClickDownloadAppAndroid"]);
			if( isiOS  )
				_hmt.push(['_trackEvent', "emily_160111", "emily_160111ClickDownloadAppIOS"]);
		
		
		
				
		
		setTimeout( function(){
			
			$('#openBtn').removeClass('active');
			

		    window.location.href = "http://dialer.cdn.cootekservice.com/web/external/laststep/index.html?code=mkt_emily_160111";
		}, 100)
		
		
	});
	$('#middleBanner').on('tap',function(){
		var src = $('#bannerImg')[0].src;
		$("#bannerImg").attr('src','img3/redHowClick.png'); 
		setTimeout( function(){
			
			$('#bannerImg').attr('src',src); 
			
		}, 100)
	});
	
	
	
    if( paras["phone"] ){
		
		$('.phone').html(paras["phone"]);
		$('.bonus').html(paras["bonus"]);
	}
	
	
    


})