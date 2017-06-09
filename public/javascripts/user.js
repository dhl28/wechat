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
            grant_type: constant.AUTHORIZATION_CODE
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
            $('#sex').text(d.sex == 1 ? '男' : '女');
        })
        //获取jsapiTicket
        $.ajax({
            url: '/users/jsapiTicket',
            data: {
                accessToken: d.access_token,
                url: window.location.href
            }
        }).then(function (d) {
            console.log(d);

            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: constant.appid, // 必填，公众号的唯一标识
                timestamp: d.timestamp, // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: constant.API_LIST // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function () {
                console.log('wx jsapi is ready');
            });
        })

    }).fail(function (err) {
        console.log(err);
    })
    //add event
    $('#viewUserInfoDetail').on('click', function (e) {
        $("#userInfoDetail").toggle();
        console.log('click event trigger');
    })
    $('#chooseImage').on('click', function (e) {
        wx.chooseImage({
            // count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                $('#localIds').html(JSON.stringify(res.localIds));
            }
        });
    })
    $('#getLocation').on('click', function (e) {
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                $('#locationInfo').html(JSON.stringify(res));
            }
        });
    })
    $('#openLocation').on('click', function (e) {
        wx.openLocation({
            latitude: 39.903230, // 纬度，浮点数，范围为90 ~ -90
            longitude: 116.397720, // 经度，浮点数，范围为180 ~ -180。
            name: ' 北京天安门广场', // 位置名
            address: '天安门坐落在中國北京市中心，故宫的南端，与天安门广场隔长安街相望，是明清两代北京皇城的正门', // 地址详情说明
            scale: 12, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        });
    })

    $('#getMyLocation').on('click', function (e) {
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
                wx.openLocation({
                    latitude: res.latitude, // 纬度，浮点数，范围为90 ~ -90
                    longitude: res.longitude, // 经度，浮点数，范围为180 ~ -180。
                    name: '我的位置', // 位置名
                    address: '根据微信接口获取经纬度打开', // 地址详情说明
                    scale: 10, // 地图缩放级别,整形值,范围从1~28。默认为最大
                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                });
            }
        });
    })


})