var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var cache = require('memory-cache');
var constant = require('../constant.js');
var sign = require('../sign.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('user');
});
router.get('/accessToken', function (req, res) {
    var uri = ' https://api.weixin.qq.com/sns/oauth2/access_token';
    var code = req.query.code;
    var ACCESS_TOKEN_KEY = "accessToken";
    var  userAccessTokenInfo = cache.get(ACCESS_TOKEN_KEY);
    if (userAccessTokenInfo) {
        console.log('======================userAccessTokenInfo cache value start===================');
        console.log(userAccessTokenInfo);
        console.log('=======================userAccessTokenInfo cache value end =====================');
        res.json(userAccessTokenInfo);
    } else {
        console.log('======================userAccessTokenInfo params start===================');
        console.log(req.query);
        console.log('======================userAccessTokenInfo params end===================');
        rp({
            uri: uri,
            qs: req.query,
            useQuerystring: true,
            method: 'GET',
            json: true
        }).then(
            function (body) {
                if(!body.errcode){
                    cache.put(ACCESS_TOKEN_KEY.toString(), body, 7200 * 1000, function (key, value) {
                        console.log(ACCESS_TOKEN_KEY +'is expires');
                    })
                }
                console.log('======================userAccessTokenInfo value start===================');
                console.log(body);
                console.log('=======================userAccessTokenInfo value end =====================');
                res.json(body);
            }
        ).catch(function (err) {
            // handleError(res, err)
            console.log(err);
        });
    }

});
router.get('/jsapiTicket', function (req, res) {
    var uri = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';
    var apiAccessToken = cache.get(constant.API_ACCESS_TOKEN);
    if (cache.get(constant.JS_API_TICKET)) {
        console.log('cache value');
        res.json( sign(cache.get(constant.JS_API_TICKET).ticket,req.query.url));
    } else {
        var params = {
            'access_token':apiAccessToken.access_token,
            'type':'jsapi'
        }
        rp({
            uri: uri,
            qs: params,
            useQuerystring: true,
            method: 'GET',
            json: true
        }).then(
            function (body) {
                if(!body.errcode){
                    cache.put(constant.JS_API_TICKET, body, 7200 * 1000, function (key, value) {
                        console.log(constant.JS_API_TICKET +'is expires');
                    })
                }
                res.json( sign(body.ticket,req.query.url));
            }
        ).catch(function (err) {
            // handleError(res, err)
            console.log(err);
        });
    }

});
router.get('/getUserInfo', function (req, res) {
    var uri = ' https://api.weixin.qq.com/sns/userinfo';
    rp({
        uri: uri,
        qs: req.query,
        useQuerystring: true,
        method: 'GET',
        json: true
    }).then(
        function (body) {
            res.json(body);
        }
    ).catch(function (err) {
        console.log(err);
    });

});

module.exports = router;
