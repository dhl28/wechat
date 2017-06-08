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
            $('#userInfoDetail').text(d);
            $('#nickname').text(d.nickname);
            $('#sex').text(d.sex==1?'男':'女');
        })

    }).fail(function (err) {
        console.log(err);
    })
    //add event
    $('#viewUserInfoDetail').on('click',function () {
        $("userInfoDetail").toggle();
    })
})