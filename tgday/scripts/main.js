//加上这句话微信就好使了\
document.addEventListener('touchmove', function (e) {
	e.preventDefault();
}, false);
$(document).ready(function () {
    //延迟加载
    (function () {
        var manifest = [
            {src: "./images/arrow.png"},
            {src: "./images/emoji.png"},
            {src: "./images/hexagon.png"},
            {src: "./images/identify.png"},
            {src: "./images/iphone.png"},
            {src: "./images/line.png"},
            {src: "./images/logo.png"},
            {src: "./images/lookhere.png"},
            {src: "./images/boy1.jpg"},
            {src: "./images/boy2.jpg"},
            {src: "./images/ex.jpg"},
            {src: "./images/girl1.jpg"},
            {src: "./images/girl2.jpg"},
            {src: "./images/man1.jpg"},
            {src: "./images/man2.jpg"},
            {src: "./images/women1.jpg"},
            {src: "./images/women2.jpg"},
            {src: "./images/background.jpg"},
            {src: "./images/bazinga.svg"},
            {src: "./images/cloud_down.png"},
            {src: "./images/cloud_top.png"},
            {src: "./images/facebook.png"},
            {src: "./images/twitter.png"},
            {src: "./images/joker.jpg"}
        ];

        var loader = new createjs.LoadQueue(false);
        loader.on("complete", function (event) {
            console.log(event);
            $('#time').text(100);
            setTimeout(function () {
                $('.part0').hide();
                $('.part1').show();
            }, 2000);

        });
        setTimeout(function () {
            $('#time').text(100);
            setTimeout(function () {
                $('.part0').hide();
                $('.part1').show();
            }, 2000);
        },10000);
        loader.on("progress", function (event) {
            console.log(event.progress);
            $('#time').text(Math.floor(event.progress * 100));
        });
        loader.on("error", function (event) {
            console.log(event);
        });
        loader.loadManifest(manifest);
    })();





	//控制滚动
	(function () {
		var winHeight = $('body').height();
		var index = 0;
		var part = $('.part');
		var length = part.length;
		part.height(winHeight);
		var $container = $('.container');
		$container.css({"-webkit-transform": 'translate3d(0px, 0px, 0px)'});

		$container.on('swipeUp', function (e) {
			if (index == length - 1) {
				return;
			}
			$container.css({
				"-webkit-transform": 'translate3d(0px, ' + (-winHeight) * (index + 1) + 'px, 0px)',
				"transform": 'translate3d(0px, ' + (-winHeight) * (index + 1) + 'px, 0px)'
			});
			part.eq(index + 1).find('.animate').addClass('on-active');
			part.eq(index).find('.animate').removeClass('on-active');
			index++;
		});
		$container.on('swipeDown', function (e) {
			console.log('down',index);
			if (index == 0) {
				return;
			}
			$container.css({
				"-webkit-transform": 'translate3d(0px, ' + (-winHeight) * (index - 1) + 'px, 0px)',
				"transform": 'translate3d(0px, ' + (-winHeight) * (index - 1) + 'px, 0px)'
			});
			part.eq(index - 1).find('.animate').addClass('on-active');
			part.eq(index).find('.animate').removeClass('on-active');
			index--;
		});
	})();
    var $tryButton = $("#ready");
    $tryButton.on('tap',function(){
        $(".ready").hide();
        $("#serialNum").show();
        $("#progress_bar").show();
        $("#expression").show();
        $("#look").show();
        scanFunc();
    });

    var ShareMessage = {
        "type": 'facebook',
        "msg": " Decode your expression and input emoji by scanning your face! Try @TouchPal Keyboard's revolutionary new feature #Expreji now",
        "title": 'Guess the Emoji',
        "url": 'http://usa.ime.cdn.cootekservice.com/default/webpage/aprilFool/index.html',
        "dlgTitle": 'Guess the Emoji',
        "callback": "onShared"
    };
    function doShare(shareMessage, type, hasImg) {
        function getVersion() {
            if (window.IMEHandler && window.IMEHandler.getImeVersion) {
                return parseInt(String(window.IMEHandler.getImeVersion()));
            } else {
                return 0;
            }
        }
        //判断是否为客户端打开
        if (!window.CTKJavaScriptHandler) {
            //外部浏览器使用url分享
            function makeParam(options) {
                var cmd = "";
                for (var param in options) {
                    cmd += (param + "=" + options[param] + "&");
                }
                if (cmd.length > 1) {
                    cmd = cmd.substring(0, cmd.length - 1);
                }
                return cmd;
            }

            var shareData = {
                link: shareMessage.url,
                display: 'popup',
                name: shareMessage.title,
                description: shareMessage.msg,
                ref: 'share',
                actions: '',
                redirect_uri: 'https://facebook.com'
            };
            if (type == 'facebook') {
                window.location.href = "https://www.facebook.com/dialog/feed?app_id=606141872785367&" + makeParam(shareData);
            } else if (type == 'twitter') {
                window.location.href = "https://twitter.com/intent/tweet?text=" + shareMessage.url + shareMessage.msg;
            }
        } else if (getVersion() < 5701) {

            //低版本客户端使用sdk分享
            switch (type) {
                case 'facebook':
                    window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
                        "type": type,
                        "msg": shareMessage.msg + ' -' + shareMessage.url,
                        "title": shareMessage.title
                    }));
                    break;
                case 'twitter':
                    window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
                        "type": type,
                        "msg": shareMessage.msg + ' -' + shareMessage.url,
                        "title": shareMessage.title,
                        "imageUrl": shareMessage.imageUrl
                    }));
                    break;
            }
        } else {
            //使用新分享机制
            if (hasImg) {
                console.log('newShare');
                window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
                    "type": type,
                    "msg": shareMessage.msg,
                    "title": shareMessage.title,
                    "url": shareMessage.url,
                    "dlgTitle": shareMessage.dlgTitle,
                    "screenshot": 'full',
                    "callback": "onShared"
                }));
            } else {
                window.CTKJavaScriptHandler.shareMessage(JSON.stringify({
                    "type": type,
                    "msg": shareMessage.msg,
                    "title": shareMessage.title,
                    "url": shareMessage.url,
                    "dlgTitle": shareMessage.dlgTitle,
                    "screenshot": '',
                    "callback": "onShared"
                }));
            }
        }

    }
    var reg = /iPhone4/;
    console.log(reg.test(device().type),device().type);
    //alert(device().type);
    if (document.body.clientHeight > 459) {
        $('.shareIcon').addClass('notIphone4');
    } else {
        $('#shareToTw').css('opacity', 1);
    }
    $("#share").on('tap', function(){
        if (window.CTKJavaScriptHandler) {
            doShare(ShareMessage,'facebook',false);
        } else {

            $("#share").addClass("shareOnCover");
            $("#showShareBg").show();
            $("#showShare").show();
            $("#shareToFb").addClass("facebookIn");
            $("#shareToTw").addClass("twitterIn");
        }
    });
    $("#showShareBg").on("tap",function(){
        $("#shareToTw").removeClass("twitterIn").addClass("twitterOut");
        $("#shareToFb").removeClass("facebookIn").addClass("facebookOut");
        setTimeout(function(){
            $("#share").removeClass("shareOnCover");
            $("#showShareBg").hide();
            $("#showShare").hide();
            $("#shareToFb").removeClass("facebookOut");
            $("#shareToTw").removeClass("twitterOut");
        },250)
    });


    //点击分享按钮
    $("#shareToFb").on("tap",function(){
        doShare(ShareMessage,'facebook',false);
    });
    $("#shareToTw").on("tap",function(){
        doShare(ShareMessage,'twitter',false);
    });

});



function device() {
    var a = {type: null, os: null, os_version: 0, width: 0, browser: "not-safari"};
    if (window.navigator.userAgent.match(/(iphone|iPad|iPod)/i)) {
        a.os = "ios";
        var c = window.navigator.userAgent.match(/OS (\d)_(\d)/i);
        a.os_version = 1 * c[1] + 0.1 * c[2];
        -1 != window.navigator.userAgent.indexOf("iPhone") ? (a.type = "iPhone", window.devicePixelRatio && 2 == window.devicePixelRatio && (a.type = "iPhone4")) : -1 != window.navigator.userAgent.indexOf("iPad") && (a.type = "iPad");
    }
    window.navigator.userAgent.match(/(safari)/i) && (a.browser = "safari");
    window.navigator.userAgent.match(/(chrome)/i) && (a.browser = "chrome");
    window.navigator.userAgent.match(/MQQ/i) && (a.browser =
        "QQ");
    window.navigator.userAgent.match(/Android/i) && (a.type = "Android", a.os = "Android", c = window.navigator.userAgent.match(/Android (\d)\.(\d)/i), a.os_version = 1 * c[1] + 0.1 * c[2]);
    a.type || (a.type = "pc");
    a.width = document.documentElement.clientWidth;
    return a;
}