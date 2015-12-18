var validate = {
        
        phone: function(elem, errmsg){
            elem = $(elem);
            var tipCon = elem.parent().find("span");
            elem.on("change", function(){
				
                var value = $.trim(this.value);
                if(!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(value)){
					elem.removeClass("pass");
                    tipCon.html(errmsg);
                }else{
				  elem.addClass("pass");
                  tipCon.html("");
                }
            });
        },
        email: function(elem, errmsg){
            elem = $(elem);
            var tipCon = elem.parent().find("span");
            elem.on("change", function(){
                var value = $.trim(this.value);
                if(!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)){
                    tipCon.html(errmsg);
                }else{
                    tipCon.html("");
                }
            });
        },
        
    };