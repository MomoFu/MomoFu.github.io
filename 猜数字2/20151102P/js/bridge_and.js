var userInfo = function(token, number, platform, version, channel, jsAPIVersion, remainMinutes, isInternationalRoaming, registerTime, flowBalance) {
    this.token = token;
    this.number = number;
    this.platform = platform;
    this.version = version;
    this.channel = channel;
    this.jsAPIVersion = jsAPIVersion;
    this.remainMinutes = remainMinutes;
    this.isInternationalRoaming = isInternationalRoaming;
    this.registerTime = registerTime;
    this.flowBalance = flowBalance;
};

String.prototype.toJsonObject = function() {
    return eval("(" + this + ")");
};

var jsHandler = window.DialerJavaScriptHandler || window.CTKJavaScriptHandler;
var Java = {
    init: function() {
        var json = jsHandler.init();
        var token = json.toJsonObject().token;
        var number = json.toJsonObject().number;
        var platform = json.toJsonObject().platform;
        var version = json.toJsonObject().version;
        var channel = json.toJsonObject().channel;
        var jsAPIVersion = json.toJsonObject().jsAPIVersion;
		var remainMinutes = json.toJsonObject().remainMinutes;
		var isInternationalRoaming = json.toJsonObject().isInternationalRoaming;
		var registerTime = json.toJsonObject().registerTime;
        var flowBalance = json.toJsonObject().flowBalance;
        return new userInfo(token, number, platform, version, channel, jsAPIVersion, remainMinutes, isInternationalRoaming, registerTime, flowBalance);
    },

    share: function(approaches, type, dlg_title, title, content, url, img_url, from) {
	    var json = {
            "approaches" : approaches,
            "type" : type,
            "dlg_title" : dlg_title,
            "title" : title,
            "content" : content,
            "url" : url,
            "img_url" : img_url,
            "from" : from
        };
        jsHandler.share(JSON.stringify(json));
    },

    showDialog: function(message, title, positive_only, positive_text, positive_cb, negative_text, negative_cb) {
        var json = {
            "message" : title,
            "title" : title,
            "positive_only" : positive_only,
            "positive_text" : positive_text,
            "positive_cb" : positive_cb,
            "negative_text" : negative_text,
            "negative_cb" : negative_cb};
        window.generalBridge.showDialog(JSON.stringify(json));
    },

    pushWeb: function(title, url) {
        var json = {
            "title" : title,
            "url" : url
        };
	    window.generalBridge.pushWeb(JSON.stringify(json));
    },

    redirect: function(json) {
        window.generalBridge.pushWeb(JSON.stringify(json));
    },

    startActivity: function(pkgname, clsname, intentData, jsonExtraData, startService) {
        jsHandler.launchLocalAppByClassName(pkgname, clsname, intentData, jsonExtraData, startService);
    },

    exchangeFlow: function(number) {
	jsHandler.exchangeTraffic(number, 0);
    },

    popToRoot: function() {
	jsHandler.popToRoot();
    },

    doTask: function(task_id) {
	var json = {
	    "task_id" : task_id
	};
	jsHandler.doTask(JSON.stringify(json));
    },

    canTakeOver: function() {
	return jsHandler.canTakeOver();
    },

    isNewInstall: function() {
	return jsHandler.isNewInstall();    
    },

    takeOverSys: function(canTakeOver, finishPageWhenDismiss, onlyDismissDlg, refreshWhenDismiss) {
	jsHandler.takeOverSys(canTakeOver, finishPageWhenDismiss, onlyDismissDlg, refreshWhenDismiss);
    },

	// type: "integer" "long" "boolean" "string"
    setKey: function(key, value, type) {
	jsHandler.setKey(key, value, type);
    },

	// type: "integer" "long" "boolean" "string"
    getKey: function(key, defaultValue, type) {
	return jsHandler.getKey(key, defaultValue, type);
    },
    
    //type: string, object(dict like)
    //Attention: do not use boolean type in the object as ios will convert the 
    //boolean into 0 or 1. so use int 0 or 1 instead of boolean value.
    dialerRecord: function(path, values) {
        if (!path || !values) return;
        if (typeof path !== 'string') return;
        if (typeof values !== 'object') return;
        path += "_" + Util.getUA();
        //Android Java code can only recognize string as parameters through js interface, 
        //so it is a must to stringify the values object.
        if (jsHandler.dialerRecord) {
        	jsHandler.dialerRecord(path, JSON.stringify(values));
		}
    }
    
};

