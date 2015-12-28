/**
 * Created by neo on 15/12/24.
 */
var myUrl = encodeURIComponent(location.href.split('#')[0]);    //自动获得本网页的url
console.log(myUrl);
function CreateScript(src) {
    var Scrip = document.createElement('script');
    Scrip.src = src;
    document.body.appendChild(Scrip);
}

function jsonpcallback(remoteData) {
    console.log(remoteData);
    wx.config({
        debug: false, // 开启或关闭调试模式,调用的所有api的返回值会在客户端alert出来
        appId: remoteData.appId, // 必填，公众号的唯一标识
        timestamp: remoteData.timestamp, // 必填，生成签名的时间戳
        nonceStr: remoteData.nonceStr, // 必填，生成签名的随机串
        signature: remoteData.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
    });
    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: '千里之外，也要一起跨年。国际长途现已可免费通话', // 分享标题
            link: 'http://www.chubao.cn/s/20151223gjzx/index.html', // 分享链接，必填
            imgUrl: 'http://www.chubao.cn/s/20151223gjzx/images/icon.jpg', // 分享图标，需替换为图片地址
            success: function () {
                // 用户确认分享后执行的回调函数，需要时选填
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数，需要时选填
            }
        });
        wx.onMenuShareAppMessage({
            title: '千里之外，也要一起跨年。国际长途现已可免费通话', // 分享标题
            desc: '身在异国他乡，跨年时有亲友的电话打来真好。', // 分享描述
            link: 'http://www.chubao.cn/s/20151223gjzx/index.html', // 分享链接，必填
            imgUrl: 'http://www.chubao.cn/s/20151223gjzx/images/icon.jpg', // 分享图标，需替换为图片地址
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数，需要时选填
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数，需要时选填
            }
        });
    });
    wx.error(function (res) {

        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

    });
}

CreateScript('//wx.chubao.cn/getwxconf?url=' + myUrl + '&callback=jsonpcallback');
