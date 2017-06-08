/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var config = require('../config.js');
var constant = require('../constant.js');
var cache = require('memory-cache');
var rp = require('request-promise');

router.use('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    console.log("==========================req.weixin start==================");
    console.log(message);
    console.log("==========================req.weixin end==================");
    //获取API_ACCESS_TOKEN
    var apiAccessToken = cache.get(constant.API_ACCESS_TOKEN);
    if(!apiAccessToken){
        var  uri ='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+config.appid+'&secret='+config.appsecret;
        rp({
            uri: uri,
            useQuerystring: true,
            method: 'GET',
            json: true
        }).then(
            function (body) {
                if(!body.errcode){
                    cache.put(constant.API_ACCESS_TOKEN, body, 7200 * 1000, function (key, value) {
                        console.log(constant.API_ACCESS_TOKEN +'is expires');
                    })
                }
                console.log(body)
                res.json(body);
            }
        ).catch(function (err) {
            // handleError(res, err)
            console.log(err);
        });
    }
    if (message.FromUserName === 'diaosi') {
        // 回复屌丝(普通回复)
        res.reply('hehe');
    } else if (message.FromUserName === 'text') {
        //你也可以这样回复text类型的信息
        res.reply({
            content: 'text object',
            type: 'text'
        });
    } else if (message.FromUserName === 'hehe') {
        // 回复一段音乐
        res.reply({
            type: "music",
            content: {
                title: "来段音乐吧",
                description: "一无所有",
                musicUrl: "http://mp3.com/xx.mp3",
                hqMusicUrl: "http://mp3.com/xx.mp3",
                thumbMediaId: "thisThumbMediaId"
            }
        });
    } else {
        // 回复高富帅(图文回复)
        res.reply([
            {
                title: '你来我家接我吧',
                description: '这是女神与高富帅之间的对话',
                picurl: 'http://f12.baidu.com/it/u=673135801,3696308275&fm=72',
                // url: 'http://travel.163.com/special/vikingeistla/'
                // url: constant.host
                 url: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcaf2b638d25c2cc4&redirect_uri=http%3a%2f%2f123.207.143.129%2fusers&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
            }
        ]);
    }
}));
module.exports = router;