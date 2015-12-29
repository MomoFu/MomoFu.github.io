/**
 * Created by neo on 15/12/23.
 */
$(function () {
    $('#jqmeter-container').jQMeter({
        goal: '5000',
        raised: '5000',
        width: '100%',
        height: '30px',
        animationSpeed: 3000,
        counterSpeed: 3000
    });
    var onPlay = true ;
    function playSound()
    {
        instance.play();
    }
    function pauseSound()
    {
        instance.paused = true ;
    }
   // playSound();
    $('.music-box').on('click', function(){
        console.log('click');
        console.log(onPlay);
        if( onPlay ){
            pauseSound();
            onPlay = false ;
            $('.music-box').removeClass('active');
        }
        else{
            playSound();
            onPlay = true ;
            $('.music-box').addClass('active');
        }
    })

    setTimeout(function(){
        $('.loading').hide();
        $('.part1').show();
    }, 3500);


    $(".country").click(function () {
        $(".part1").hide();
        $(".part2").show();
        var thisText = $(this).text();
        $(".countryShow").text(thisText);
        selectedCountry = thisText;
    });

    $(".japan").click(function () {
        $(".selcetcountry").text('2000公里之外的日本');
        $(".city").css('background-image', 'url("images/p2-japan.png")');
    });

    $(".hongkong").click(function () {
        $(".selcetcountry").text('1500公里之外的港澳台');
        $(".city").css('background-image', 'url("images/p2-gang.png")');
    });

    $(".korea").click(function () {
        $(".selcetcountry").text('1000公里之外的韩国');
        $(".city").css('background-image', 'url("images/p2-korea.png")');
    });

    $(".american").click(function () {
        $(".selcetcountry").text('一万公里之外的美国');
        $(".city").css('background-image', 'url("images/p2-america.png")');
    });

    $(".singapore").click(function () {
        $(".selcetcountry").text('4500公里之外的新加坡');
        $(".city").css('background-image', 'url("images/p2-singapore.png")');
    });

    $(".other").click(function () {
        $(".part1").hide();
        $(".part3").show();
    });

    $(".phone2").click(function () {
        $(".component").show();
        $(this).removeClass("rotate1");
        $(".online").text("正在联线").removeClass("online-move");
        $(".phone1").attr("src", "images/p2-iphone2.png");
        setTimeout(function () {
            $(".city").css('opacity', '1');
            $(".online").text('您已经成功和' + selectedCountry + '连线！').css("color", "#67cef6");
            $(".phone2").css('background-image', 'url("images/p2-iphone2.png")');
        }, 2000);
        setTimeout(function () {
            $(".part2").hide();
            $(".part3").show();
            $(".text").show();
        },4000);
    });

    $(".wxsharebtn").click(function () {
        $(".mask").show();
        $('.music-box').hide();
    });
    $(".mask").click(function(){
        $(this).hide();
        $('.music-box').show();
    })
});