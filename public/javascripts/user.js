/**
 * Created by dhl on 2017/6/7.
 */
$( document ).ready(function () {
    console.log(window.location.href);
    var code = util.getQueryString('code');
    console.log('================code================');
    console.log(code);
    console.log('================code================');
    var url = '/users/accessToken';
    $.ajax({
        url:url,
        data:{
            appid:constant.appid,
            secret:constant.appsecret,
            code:code,
            grant_type:'authorization_code'
        }
    }).done(function (d) {
        console.log(d);
    }).fail(function (err) {
        console.log(err);
    })
})