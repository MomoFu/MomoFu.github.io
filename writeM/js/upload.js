/**
	 * @method uploadBase64
	 * @description 64位图片上传，一般情况用于游戏记录中的事件
	 * @param  {[type]} json.dataStr 图片的数据"data:image/png" 
	 * @param  {[type]} json.picid 图片的ID建议使用fl的ID
	 * @param  {[type]} json.qm 图片存在的目录PG下的XX
	 * @param  {[type]} json.func 上传完成回调的函数 ，返回{'fn':a},A是服务器上的图片路径 
	 * @return {[type]}      [description]
	 */
	 
	 
	 //	var image= myCanvas.toDataURL("image/png");
	function uploadBase64(json){
	   
	   var dataStr=json.dataStr||"";//64位图片字符串
	   var fext = fext || "jpg";//扩展名
	   var picid=json.picid||0;//图片名称ID，建议使用fl的ID
	   var func = json.func;
	   
	   "data:image/png" == dataStr.substr(0, 14) ? (dataStr = dataStr.substr(22), fext = "png") : (dataStr = dataStr.substr(23), fext = "jpg");
	   
	   
	   //开始执行上传操作
	   var httpR = new XMLHttpRequest;
	  
		httpR.onreadystatechange = function() {
			//上传完成后
			if (4 == httpR.readyState && 200 == httpR.status) {
				var a = httpR.responseText;
				console.log('back msg: '+a);
				func('http://stois.ufile.ucloud.com.cn/'+picid+".png");
			} else 4 == httpR.readyState && 200 !== httpR.status && (alert("code:" + httpR.status));
		};
		httpR.ontimeout = function() {
			console.log('timeout')
		};
		httpR.upload && (httpR.upload.onprogress = function(dataStr) {
		   //dataStr.lengthComputable && jQuery("#uploadBg64Tip").html("<p>图片上传中<span>" + Math.round(dataStr.loaded / dataStr.total * 100) + '%)</span></p>');
		}); 
		var uploadUrl="base64.php";
		
		httpR.open("POST",uploadUrl,!0);
		httpR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		dataStr = "dataStr=" + encodeURIComponent(dataStr) + "&type=" + fext+"&id="+picid;
		//console.log(dataStr);
		httpR.send(dataStr);
	};
	