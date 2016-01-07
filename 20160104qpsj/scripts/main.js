$(document).ready(function () {
    //分屏滑动
    $('.main').fullpage();


    //延迟加载
    $("img.lazy").lazyload();

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

    playSound4();
    $('.music-box').on('click', function () {
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
        $(".p2_arrow,.p2_bg").lazyload();
        playSound1();
    }, 3000);
    setTimeout(function () {
        $('.page2').hide();
        $('.page3').show();
        $(".p3_dialogbox,.p3_bg").lazyload();
        pauseSound1();
    }, 6500);
    $('.p3_button').click(function () {
        $('.page3').hide();
        $('.page4').show();
    });
    $('.p4_button1,.p4_button2').click(function () {
        $('.page4').hide();
        $('.page5').show();
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
		step1 = false ;
        $('.page6').hide();
        $('.main').show();
        $('.music_img').attr("src", "images/music_black.png");
        $('.music-box').css('border','solid 1px #000000');
        pauseSound4();
		if( onPlay )
          playSound3();
    });
    $('.p13_button').click(function () {
        $('.mask').show();
    });
    $('.mask').click(function () {
        $(this).hide();
    });


});
