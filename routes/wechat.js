/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var config = require('../config.js');
var constant = require('../constant.js');
router.use('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    console.log("==========================req.weixin start==================");
    console.log(message);
    console.log("==========================req.weixin end==================");
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
                url: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb907dfb2faa05934&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdap"+
                "ter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
            }
        ]);
    }
}));
module.exports = router;