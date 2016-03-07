<?php
    $auth ;
    if( $_GET['code'] ){
		$auth = 'yes' ;
    	$code =  $_GET['code'];
		$AppSecret = "b9903f29e1118502f7e39e48543d133b";
	    $AppId = "wxc89be2c61eada014";
	    $state = $_GET['state'] ;
		$tmp = explode("0%231%23", $state) ;
		$real_url = $tmp[1];
		$ch = curl_init();

// 设置URL和相应的选项
curl_setopt($ch, CURLOPT_URL, "https://api.weixin.qq.com/sns/oauth2/access_token?appid=".$AppId."&secret=".$AppSecret."&code=".$code."&grant_type=authorization_code");
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_jar);


// 抓取URL并把它传递给浏览器
     $result = curl_exec($ch);
	 $json_obj = json_decode($result,true);  
	 //echo $result ;
	 
	// echo strip_tags($result);
// 关闭cURL资源，并且释放系统资源
     curl_close($ch);
	 
     $access_token = $json_obj['access_token'];  
      $openid = $json_obj['openid'];  
	//  $unionId = $user_obj['unionid'];
	  $scope = $user_obj['scope'];
	  $get_user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN';  
             $ch = curl_init();  
             curl_setopt($ch,CURLOPT_URL,$get_user_info_url);  
             curl_setopt($ch,CURLOPT_HEADER,0);  
             curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );  
             curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);  
             $res = curl_exec($ch);  
             curl_close($ch);  
			 $user_obj = json_decode($res,true);  
             $unionId = $user_obj['unionid'];
			 $sex = $user_obj['sex'];
             $headImg = $user_obj['headimgurl'];
             $nickname = $user_obj['nickname'];
	  if( !isset($unionId) || $unionId =='' ){
		    $url =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc89be2c61eada014&redirect_uri=http%3A%2F%2Ftouchlife.cootekservice.com%2Fcallback%2Fwechat&response_type=code&scope=snsapi_userinfo&state=0%231%23http%3A%2F%2Fmarketing1.chubao.cn%2FwriteM%2Findex.php#wechat_redirect" ;
		    echo '<script>location.href="'.$url.'"</script>';
	  }

//解析json  
         
	}

	else{
		print_r("no authorization from user");
	}
	
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<META HTTP-EQUIV="Pragma" CONTENT="no-cache"> 
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache"> 
    <META HTTP-EQUIV="Expires" CONTENT="0"> 
    <title>见字如见人</title>
	<link href="css/reset.css" rel="stylesheet">
	 <!-- Link Swiper's CSS -->
	 <script>
		var _hmt = _hmt || [];
		(function() {
		  var hm = document.createElement("script");
		  hm.src = "//hm.baidu.com/hm.js?f6200b3f84a33687e8caa711f5772fb8";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(hm, s);
		})();
	</script>
   <style>
       html,body{width: 100% ; height : auto;}
       img{display: block; width : 100% ;}
	   .wipe{position: relative ; margin : auto ; margin-top : 20px;width : 300px ;height : 300px;} 
	   .wipe .mask{
		   position : absolute ;
		   top : 0 ;
		   width : 100% ;
		   height : 100% ;
		   background-color: rgba(0,0,0,0.7);
	   }
	   
	   .wipe canvas{
		   background-image : url(images/fill.png);
		   background-size : 100% auto ;
		   background-repeat : no-repeat ;
	   }
	   .wipe .mask p{
		   position : relative ;
		   top : 45% ;
		   margin : auto ;
		   text-align: center ;
		   color : white ;
	   }
	   .frontPage{
		   position : absolute ;
		   top : 0 ;
		   width : 100% ;
		   height: 100% ;
		   z-index : 0 ;
		   overflow-y: scroll;
	   }
	   .bannerContainer{
		   position : relative ;
		   width : 80% ;
		   margin : auto ;
		   margin-top: 4px ;
	   }
	   .tipsContainer{
		   position : relative ;
		   width : 80% ;
		   margin: auto;
		   border-radius : 8px ;
		   margin-bottom : 20px ;
		   margin-top : 16px;
		   background-color : #009edb;
		   padding-top: 16px;
		   padding-bottom: 16px;
		   
		  
	   }
	   .tipsContainer p{
		   text-align: left ;
		   font-size :16px ;
		   color : white;
		   line-height: 32px ;
		   padding-left: 20px ;
	   }
	   
	   .showContainer{
		  position : relative ;
		  width : 80% ;
		  margin : auto ;
		  margin-bottom: 20px;
	   }
	   .imageContainer{
	      position : relative ;
		  float : left ;
		  margin-top : 8px ;
		  width : 50% ;
	   }
	   .imageContainer>img{
			width : 90%;
			margin : auto ;
			
	   }
	   .clear{
		   clear : both ;
	   }
	   .frontPage .wordsContainer{
		   position : relative ;
		   margin : auto;
		   width : 100% ;
		   margin-top : 40px ;
	   }
	   .frontPage .wordsContainer > p{
		   text-align : center ;
		   color : black ;
		   font-size : 16px ;
	   }
	   
	   .drawContainer, .resultContainer, .wxContainer{
		   position : absolute ;
		   width : 100% ;
		   top : 0 ;
		   background-color: white ;
	       height : 100% ;
		   overflow-y: scroll;
		   visibility : hidden;
	   }
	   
	   .wxContainer{
		   background-color : #a30400 ;
	   }
	   .drawContainer{
		   z-index : 2 ;
	   }
	   .resultContainer{
		   z-index : 3 ;
	   }
	   .wxContainer{
		   z-index :4 ;
	   }
	   
	   .thumbContainer{
		   position : relative ;
		   width : 20% ;
		   margin : auto ;
		   margin-top: 20px ;
	   }
	   .buttonWrapper{
		   
		   position : relative ;
		   width : 240px;
		   margin: auto;
		    margin-top : 40px ;
	   }
	   .buttonContainer{
		  position: relative ;
		 
		  width : 100px ;
		  margin : auto ;
		 
		  background-image:url(images/but2.png);
		  background-size : 100% auto ;
		  background-repeat: no-repeat;
	   }
	   .buttonContainer.left{
		    float: left;
	   }
	   .buttonContainer.right{
		    float: right;
	   }
	   
	  
	   .okay{
		  position : relative ;
		  line-height : 40px ;
		  font-size : 18px ;
		  text-align: center ;
		  color: red ;
		  
	   }
	   
	   .resultContainer .wordsContainer{
		   
		   position : relative ;
		   width : 100%;
		   margin : auto ;
		   background-color: #009edb;
		   padding-bottom: 20px;
	   }
	   
	   .resultContainer .wordsContainer img{
		   width : 90%;
		   margin:auto;
	   }
	   
	    .resultContainer .contentContainer{
			position: relative ;
			margin-top  : 24px ;
			width : 100% ;
	   }
	   .wxContainer .contentContainer{
			position: relative ;
			margin-top : -80px ;
			width : 100% ;
	   }
	   
	   .wxContainer .contentContainer > img{
		   position : relative ;
		   width : 80% ;
		   margin : auto ;
	   }
	    .resultContainer .contentContainer > p, .wxContainer .contentContainer p{
			font-size: 16px ;
			line-height: 32px ;
			text-align: center ;
			color : black ;
	   }
	   .resultContainer .logoContainer{
		   position : relative ;
		   width : 45% ;
		   margin : auto ;
		   margin-top: 24px;
		   margin-bottom: 24px;
	   }
	   
	   @-webkit-keyframes jump {
		 
		  50% {
			-webkit-transform: translateY(-10px);
		  }
		  
		}
	   
	   .resultContainer .wordsContainer .pandaContainer{ 
		   position : absolute  ;
		   width : 40px;
		   top : -30px;
		   right : 0 ;
    -webkit-animation: jump 1s;
    -webkit-animation-iteration-count: infinite;
	   }
	   
	   .qrContainer{
			position : absolute ;
			top : 60% ;
			width : 40% ;
			left : 30% ;
			
	   }
	   .wxContainer .bannerContainer{
			position : relative ;
			width : 100% ;
			margin: auto ;
	   }
	   #red{
		   color : red;
		   font-size :18px ;
	   }
	   
	   
	   
   </style>
   <script>
	  // var headImg = '<?php echo $headImg ;?>' ;
	   //console.log(headImg);
	   var nickName = '<?php echo $nickname ;?>' ;
	   var sex = '<?php echo $sex ;?>' ;
	   var headImg = '<?php echo $headImg ;?>' ;
	   _hmt.push(['_trackEvent', "guessWhat", "guessWhatIn"]);
	//   document.title = nickName + "的朋友圈";
	</script>
	
</head>
<body>

	<div class="frontPage">
		<div class="bannerContainer">
			<img src="images/p4-biaoti.png" alt="">
		</div>
		<div class="tipsContainer">
			<p>他们认得你的人</p>
			<p>却不见得认得你的字</p>
			<p>从下面四个字里选一个来写</p>
			<p>看看好友们能否看出你写的字</p>
		</div>
		
		<div class="showContainer">
			<div id="chu" class="imageContainer">
				<img src="images/p4-chu.png" alt="">
			</div>
			<div id="bao" class="imageContainer">
				<img src="images/p4-bao.png" alt="">
			</div>
			<div id="dian" class="imageContainer">
				<img src="images/p4-dian.png" alt="">
			</div>
			<div id="hua" class="imageContainer">
				<img src="images/p4-hua.png" alt="">
			</div>
			<div class="clear"></div>
		</div>
		
		
		
	</div>
	<div class="drawContainer">
	    <div class="thumbContainer">
			<img id="thumb" src="" alt="">
		</div>
		<div class="wipe" id="wipe2A" style="">
			<canvas id="canvas"></canvas>
		</div>
		<div class="buttonWrapper">
			<div class="buttonContainer left" id="repaint" >
			   <p class="okay">重写</p>
			</div>
			
			<div class="buttonContainer right" id="button" >
			   <p class="okay">提交</p>
			</div>
			<div class="clear"></div>
		</div>
	</div>
    <div class="resultContainer">
		<div class="wordsContainer">
			<img src="images/p6-fenxiang.png" alt="">
		</div>
		<div class="result" id="result" style="position: relative ; margin : auto ; margin-top: 20px ; width : 70% ; background-image: url(images/fill.png); background-size:100% auto ; background-repeat : no-repeat; ">
        </div>
		
		<div class="contentContainer">
			<p>用触宝，免费给朋友打电话</p>
			<p>就算不认得你的字</p>
			<p>也要认得你的声音</p>
		</div>
		
		<div class="logoContainer">
			<img src="images/logo.png" alt="">
		</div>
	</div>
	
	<div class="wxContainer">
		<div class="bannerContainer">
			<img src="images/p7-hongbao.jpg" alt="">
		</div>
		<div class="contentContainer">
			<img src="images/hongbao.png">
			<div id="qrContainer" class="qrContainer">
				<img src="images/btn.png">
			</div>
		</div>
		
	</div>
  
  
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript" src="http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
<script src="js/code.js"></script>
<script src="js/index.js"></script>
<script src="js/paper_lang.js"></script>
<script src="js/upload.js"></script>

<script src="js/wx.js?v=5"></script>

<script>
var selected = 'chu' ;
var wipe2A = document.getElementById('wipe2A');
$(document).ready(function(){
	    _hmt.push(['_trackEvent', "guessWhat", "guessWhatEnter"]);  
        
		maing();  
		//drawGrid();
		$('#button').one('click', function(){
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatUpload"]); 
			var myCanvas = document.getElementsByTagName('canvas')[0];
			var image= myCanvas.toDataURL("image/png");
			var pid = s20();
			
			var mask = document.createElement('div');
			mask.setAttribute('class','mask');
			var tips = document.createElement('p');
			tips.innerHTML = '生成图片中';
            mask.appendChild(tips);
			wipe2A.appendChild(mask);
			uploadBase64 ({dataStr:image,picid:pid,func:function(a){////src="http://www.kxtui.com/pg/qm/70256351.jpg"	
				   console.log(a);
				   var img = new Image();
				   img.onload = function(){
						var tmp = document.getElementById('result');
						//console.log(wipe2A.childNodes.length);
						//wipe2A.removeChild(wipe2A.childNodes[1]);
						tmp.appendChild(img);
						_hmt.push(['_trackEvent', "guessWhat", "guessWhatGetFeedbackLink"]);
						$('.resultContainer').css('visibility', 'visible');
				   }
				   img.src = a;
				  // wipe.autoWipe();
				   var u = '{"nickname":"'+nickName+'","imgurl":"'+a+'","select":"'+selected+'","sex":"'+sex+'","headImg":"'+headImg+'"}'
				   u = Base64.encodeURI(u);
				   initWX(nickName, headImg, u);
				  // wipe.clear();
				  // wipe.init();
				  // drawGrid();
			    }		
	         }); 
	    })
		/*
		$('#repaint').on('click', function(){
			//wipe.clear();
			//wipe.init();
		    drawGrid();
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatRepaint"]);
	    })
		*/
		$('.imageContainer').on('click', function(){
			
			var id = $(this).attr('id');
			selected = id ;
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatChooseWrite"+selected]);
			$('#thumb').attr('src', 'images/p4-'+id+'.png');
			$('.drawContainer').css('visibility', 'visible');
		})
		
		$('#qrContainer').on('click', function(){
			_hmt.push(['_trackEvent', "guessWhat", "guessWhatClickRedBao"]);
			window.location.href = "http://www.chubao.cn/s/20160127xrhb2/index.html";
		})
});
</script>
</html>
