var scanFunc = function () {
    var myCanvas = document.getElementById("scan");
    var canvas = myCanvas.getContext("2d");
    //扫描线运动方向，默认从上到下
    var Up2Down = true;
    var image = new Image();
    var expressions = ['Detecting facial expression',
        'Matching Emoji in cloud database',
        'Finalizing (almost there)',];
    image.src = "images/line.png";
    var y = 0;
    var draw = function (pos, Up2Down) {

        if (Up2Down) {
            canvas.clearRect(0, 0, 300, pos - 1);
        }
        else {
            canvas.clearRect(0, pos + 1, 300, pos);
        }
        canvas.drawImage(image, 0, pos, 300, 1);
    }
    var ff = function () {
        if (Up2Down) {
            draw(y++, Up2Down);
        } else {
            draw(y--, Up2Down);
        }
        if (y > 152) {
            Up2Down = false;
        }
        else if (y < -3) {
            Up2Down = true;
        }
    }
    image.onload = setInterval(ff, 20);

    //进度条上方文字动画
    var expressionIndex = 0;
    var expressionAnimate = function(){
        if(expressionIndex >= expressions.length){
            expressionIndex = 0;
        }
        $("#expression span").text(expressions[expressionIndex++])
    }
    setInterval(expressionAnimate, 2500)

    $("#recent_progress").addClass("progressBegin");

    setTimeout(function () {
        $(".scan").hide();
        $("#shareContainer").show();
        $("#joker").addClass("jokerScale");
        //设置延迟，等joker缩放完再进行抖动
        setTimeout(function(){
            $("#joker").removeClass("jokerScale");
            $("#joker").addClass("jokerShake");
            $("#topCloud").addClass("topCloud");
            $("#downCloud").addClass("downCloud");
            setTimeout(function(){
                $("#topCloud").removeClass("topCloud animate on-active")
                $("#topCloud").addClass("topCloudShake");
                $("#downCloud").removeClass("downCloud animate on-active");
                $("#downCloud").addClass("downCloudShake");
            },3000);
        },1000);

    }, 10000);
}