var Util = {
	token:'',
    number:'',
    platform:'',
    version:'',
    channel:'',
    jsAPIVersion:'',
    remainMinutes:'',
    isInternationalRoaming:'',
	flowBalance:'',
	registerTime:'',
	init: function(message, response) { //每个页面都会引用utility.js，并且都会在初始化时先调用这个方法
		Util.token = message.token;
		Util.number = message.number;
		Util.platform = message.platform;
		Util.version = message.version;
		Util.channel = message.channel;
		Util.jsAPIVersion = message.jsAPIVersion;
		Util.remainMinutes = message.remainMinutes;
		Util.isInternationalRoaming = message.isInternationalRoaming;
		Util.flowBalance = message.flowBalance;
		Util.registerTime = message.registerTime;
		//alert(message);
    }
}