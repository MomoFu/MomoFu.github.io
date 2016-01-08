var onPlay = true;
var step1 = true ;
    function playSound1() {
        var node = document.getElementById('audio1');
        if (node != null) {
            node.play();
        }
    }

    function pauseSound1() {
        var node = document.getElementById('audio1');   //脚步
        if (node != null) {
            node.pause();
        }
    }

    function playSound2() {
        var node = document.getElementById('audio2');     //碎玻璃
        if (node != null) {
            node.play();
        }
    }

    function pauseSound2() {
        var node = document.getElementById('audio2');
        if (node != null) {
            node.pause();
        }
    }

    function playSound3() {
        var node = document.getElementById('audio3');     //最后
        if (node != null) {
            node.play();
        }
    }

    function pauseSound3() {
        var node = document.getElementById('audio3');
        if (node != null) {
            node.pause();
        }
    }

    function playSound4() {
        var node = document.getElementById('audio4');    //背景
        if (node != null) {
            node.play();
        }
    }

    function pauseSound4() {
        var node = document.getElementById('audio4');
        if (node != null) {
            node.pause();
        }
    }

$(document).ready(function () {
    _hmt.push(['_trackEvent', "qpsjP", "qpsjPOpen"]);

    //进度条
    $('#jqmeter-container').jQMeter({
        goal: '5000',
        raised: '5000',
        width: '100%',
        height: '30px',
        animationSpeed: 3000,
        counterSpeed: 3000,
        barColor: '#48b4da'
    });

    //music
   /*var onPlay = true;
    var step1 = true ;
    function playSound1() {
        var node = document.getElementById('audio1');
        if (node != null) {
            node.play();
        }
    }

    function pauseSound1() {
        var node = document.getElementById('audio1');   //脚步
        if (node != null) {
            node.pause();
        }
    }

    function playSound2() {
        var node = document.getElementById('audio2');     //碎玻璃
        if (node != null) {
            node.play();
        }
    }

    function pauseSound2() {
        var node = document.getElementById('audio2');
        if (node != null) {
            node.pause();
        }
    }

    function playSound3() {
        var node = document.getElementById('audio3');     //最后
        if (node != null) {
            node.play();
        }
    }

    function pauseSound3() {
        var node = document.getElementById('audio3');
        if (node != null) {
            node.pause();
        }
    }

    function playSound4() {
        var node = document.getElementById('audio4');    //背景
        if (node != null) {
            node.play();
        }
    }

    function pauseSound4() {
        var node = document.getElementById('audio4');
        if (node != null) {
            node.pause();
        }
    }
*/
    //playSound4();
    $('.music-box').on('click', function () {
        _hmt.push(['_trackEvent', "qpsjP", "qpsjPmusicClick"]);
        console.log('click');
		
        console.log(onPlay);
        if (onPlay) {		
               pauseSound1();
			   pauseSound2();
		   if( step1 )
               pauseSound4();
		   else
              pauseSound3();
            onPlay = false;
            $('.music-box').removeClass('active');
        }
        else {
              // playSound1();
              // playSound2();
			   if( !step1 )
                  playSound3();
			   else
                  playSound4();
            onPlay = true;
            $('.music-box').addClass('active');
        }
    });


    //main
    setTimeout(function () {
        $('.loading').hide();
        $('.page2').show();
		var tmp = $('.p3_load').size();
		console.log(tmp);
		for( var i = 0 ; i < tmp ; i++ ){
			var image = new Image();
			image.onload = function(){
				var me = i ;
				return function(){
					console.log(me);
				     $('.p3_load')[me].setAttribute('src', $('.p3_load')[me].getAttribute('data'));
				}
			}(i);
			
			var me = $('.p3_load')[i];
			console.log(me.getAttribute('data'));
			image.src = me.getAttribute('data');
		}

		if(onPlay)
			playSound1();
    }, 3000);
    setTimeout(function () {
        $('.page2').hide();
        $('.page3').show();
		var tmp = $('.p4_load').size();
		console.log(tmp);
		for( var i = 0 ; i < tmp ; i++ ){
			var image = new Image();
			image.onload = function(){
				var me = i ;
				return function(){
					console.log(me);
				     $('.p4_load')[me].setAttribute('src', $('.p4_load')[me].getAttribute('data'));
				}
			}(i);
			
			var me = $('.p4_load')[i];
			console.log(me.getAttribute('data'));
			image.src = me.getAttribute('data');
		}
        pauseSound1();
    }, 5500);
    $('.p3_button').click(function () {
        _hmt.push(['_trackEvent', "qpsjP", "qpsjPp3buttonClick"]);
        $('.page3').hide();
        $('.page4').show();
		var tmp = $('.p5_load').size();
		console.log(tmp);
		for( var i = 0 ; i < tmp ; i++ ){
			var image = new Image();
			image.onload = function(){
				var me = i ;
				return function(){
					console.log(me);
				     $('.p5_load')[me].setAttribute('src', $('.p5_load')[me].getAttribute('data'));
				}
			}(i);
			
			var me = $('.p5_load')[i];
			console.log(me.getAttribute('data'));
			image.src = me.getAttribute('data');
		}
    });
    $('.p4_button1,.p4_button2').click(function () {
        $('.page4').hide();
        $('.page5').show();
		var tmp = $('.p6_load').size();
		console.log(tmp);
		for( var i = 0 ; i < tmp ; i++ ){
			var image = new Image();
			image.onload = function(){
				var me = i ;
				return function(){
					console.log(me);
				     $('.p6_load')[me].setAttribute('src', $('.p6_load')[me].getAttribute('data'));
				}
			}(i);
			
			var me = $('.p6_load')[i];
			console.log(me.getAttribute('data'));
			image.src = me.getAttribute('data');
		}
    });
    $('.p5_axe').click(function () {
        $(this).addClass('axe_active');
        $('.p5_text').hide();
        setTimeout(function () {
            $('.p5_1').hide();
        }, 400);
        setTimeout(function () {
            $('.page5').addClass('opa');
			if( onPlay )
               playSound2();
        }, 500);
        setTimeout(function () {
            $('.page5').hide();
            $('.page6').show();
            pauseSound2();
        }, 1500);
    });
    $('.page6_1').click(function () {
        $(this).hide();
        $('.page6_2').show();
        $('.p6_p').text('什么鬼……明明一副“快来看我吧”的架势还假装绝密。算了先看看到底是什么，也许有美女泳装照？');
    });
    $('.page6_2').click(function () {
        _hmt.push(['_trackEvent', "qpsjP", "qpsjPletterClick"]);
		step1 = false ;
		$('.main').fullpage({
			normalScrollElements: '.page'
		});
        $('.page6').hide();
        $('.main').show();
        $('.music_img').attr("src", "http://zhcn.web.cdn.cootekservice.com//s/20160104qpsj/images/music_black.png");
        $('.music-box').css('border','solid 1px #000000');
        pauseSound4();
		if( onPlay )
          playSound3();
    });


});
