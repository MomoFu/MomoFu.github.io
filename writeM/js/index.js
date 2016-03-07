    function s20(){  
		var data=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  
				  
		var result="";  
		for(var i=0;i<20;i++){  
			var r=Math.floor(Math.random()*62);     //取得0-62间的随机数，目的是以此当下标取数组data里的值！  
			result+=data[r];        //输出20次随机数的同时，让rrr加20次，就是20位的随机字符串了。  
		}  
		return result;
    }  
/*
	var wipeObj = ['#wipe2A'];
	for( var i = 0 ; i < wipeObj.length ; i ++ ){
		var wipe = new Wipe({
			el: wipeObj[i],
			fg: '#ffffff',
			size: 10,
			debug: false,
			autoWipe: false,
			data: null,
			onswiping: function (percent) {
				
				
			},
			beginSwipe: function(){
			    $('#wipe2A').css('backgroundColor', 'black');
				console.log(this.opts.el);
				
			}
		});
	}
*/	
	function drawDashLine(ctx, x1, y1, x2, y2, dashLength){
      var dashLen = dashLength === undefined ? 5 : dashLength,
      xpos = x2 - x1, //得到横向的宽度;
      ypos = y2 - y1, //得到纵向的高度;
      numDashes = Math.floor(Math.sqrt(xpos * xpos + ypos * ypos) / dashLen); 
      //利用正切获取斜边的长度除以虚线长度，得到要分为多少段;
      for(var i=0; i<numDashes; i++){
         if(i % 2 === 0){
             ctx.moveTo(x1 + (xpos/numDashes) * i, y1 + (ypos/numDashes) * i); 
             //有了横向宽度和多少段，得出每一段是多长，起点 + 每段长度 * i = 要绘制的起点；
          }else{
              ctx.lineTo(x1 + (xpos/numDashes) * i, y1 + (ypos/numDashes) * i);
          }
       }
      ctx.stroke();
	}
	
	function drawGrid(){
		var canvas = document.getElementsByTagName('canvas')[0];
		  var context = canvas.getContext('2d');
		  
		  context.lineWidth = 2;
		  context.beginPath();
		  context.moveTo(2, 2);
		  context.lineTo(2 , 298);
		  context.lineTo(298, 298);
		  context.lineTo(298, 2);
		  context.lineTo(2,2);
		  context.stroke();
	
	     context.lineWidth = 1;
	     drawDashLine(context, 2, 2, 298, 298, 5);
		 drawDashLine(context, 2,298, 298, 2, 5);
		 drawDashLine(context, 4,150, 298, 150, 5);
		 drawDashLine(context, 150,4, 150, 298, 5);
	}
	