function v( a , b ,c ){
	if( md5(a+b) == c )
		return true ;
	else return false ;
}

function isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }
	
function isQQ(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/qq/i) == 'qq' && !isWeiXin() ){
            return true;
        }else{
            return false;
        }
    }
	
function GetRequest() {   
      var url = location.search; //获取url中"?"符后的字串   
      var theRequest = new Object();   
      if (url.indexOf("?") != -1) {   
         var str = url.substr(1);   
         strs = str.split("&");   
         for(var i = 0; i < strs.length; i ++) {   
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
         }   
      }   
      return theRequest;   
   }   