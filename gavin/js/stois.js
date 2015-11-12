var validate = {
        
        phone: function(elem, errmsg){
            elem = $(elem);
            var tipCon = $('#errmsg');
            elem.on("keyup", function(){
				
                var value = $.trim(this.value.replace(/\s/g,""));
                if(!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(value)){
					elem.removeClass("pass");
					$('#openBtn').removeClass("active");
                  //  tipCon.html(errmsg);
					$('#status').attr("src","images/sign_off.png");
                }else{
				  elem.addClass("pass");
				  if( $('#q5').hasClass("pass") ){
					  $('#openBtn').addClass("active");
				  }
                 // tipCon.html("");
				  $('#status').attr("src","images/sign_on.png");
                }
				
                
				
            value = value.replace(/\s*/g, "");

        var result = [];
		
        for(var i = 0; i < value.length; i++)
        {
			if( i == 3 || i == 7 ){
				result.push(" " + value.charAt(i) );
			}
            
            else
            {
                result.push(value.charAt(i));
            }
        }
        this.value = result.join("");

                
				
				
            });
        },
        code: function(elem, errmsg){
           elem = $(elem);
            var tipCon = $('#errmsg');
            elem.on("keyup", function(){
				
               // var value = $.trim(this.value.replace(/\s/g,""));
				
                
				
               value = this.value.replace(/\s*/g, "");
               var result = [];
		      if( value.length == 16 ){
				  elem.addClass("pass");
				  $('#status1').attr("src","images/sign_on.png");
				  if( $('#q4').hasClass("pass") ){
					  $('#openBtn').addClass("active");
				  }
			  }
			  else{
				  elem.removeClass("pass");
				  $('#status1').attr("src","images/sign_off.png");
				  $('#openBtn').removeClass("active");
			  }
              for(var i = 0; i < value.length; i++)
              {
			     if( i % 4 == 0 && i != 0 ){
				     result.push(" " + value.charAt(i) );
			   }
            
                 else
                 {
                   result.push(value.charAt(i));
                  }
              }
              this.value = result.join("");

                
				
				
            });
        },
        
    };