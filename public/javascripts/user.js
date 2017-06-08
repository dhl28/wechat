/**
 * Created by dhl on 2017/6/7.
 */
$(document).ready(function () {
    console.log(window.location.href);
    var code = util.getQueryString('code');
    var url = '/users/accessToken';
    $.ajax({
        url: url,
        data: {
            appid: constant.appid,
            secret: constant.appsecret,
            code: code,
            grant_type: 'authoreization_code'
        }
    }).done(function (d) {
        console.log(d);
        window.tokenMeta = d;//缓存token
        $.ajax({
            url: '/users/getUserInfo',
            data: {
                access_token: d.access_token,
                openid: d.openid,
                lang: 'zh_CN '
            }
        }).then(function (d) {
            console.log('--------userInfo start--------');
            console.log(d);
            console.log('--------userInfo end--------');
            $('#userInfoDetail').text(JSON.stringify(d));
            $('#nickname').text(d.nickname);
            $('#sex').text(d.sex==1?'男':'女');
        })
        //获取jsapiTicket
        $.ajax({
            url: '/users/jsapiTicket',
            data: {
                accessToken:d.access_token,
                url:window.location.href
            }
        }).then(function (d) {
            console.log(d);

            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: constant.appid, // 必填，公众号的唯一标识
                timestamp:d.timestamp , // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: ['chooseImage','getLocation','openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function(){
                console.log('wx jsapi is ready');
            });
        })

    }).fail(function (err) {
        console.log(err);
    })
    //add event
    $('#viewUserInfoDetail').on('click',function (e) {
        $("#userInfoDetail").toggle();
        console.log('click event trigger');
    })
})