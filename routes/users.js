var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var cache = require('memory-cache');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('user');
});
router.get('/accessToken', function (req, res) {
    var uri = ' https://api.weixin.qq.com/sns/oauth2/access_token';
    var code = req.query.code;
    var ACCESS_TOKEN_KEY = "accessToken";
    if (cache.get(ACCESS_TOKEN_KEY)) {
        console.log('cache value');
        res.json(cache.get(ACCESS_TOKEN_KEY));
    } else {
        rp({
            uri: uri,
            qs: req.query,
            useQuerystring: true,
            method: 'GET',
            json: true
        }).then(
            function (body) {
                cache.put(ACCESS_TOKEN_KEY.toString(), body, 7200 * 1000, function (key, value) {
                    console.log(ACCESS_TOKEN_KEY +'is expires');
                })
                res.json(body);
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
