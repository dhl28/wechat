var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var cache = require('memory-cache');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('user');
});
router.get('/accessToken', function (req, res) {
    var  uri = ' https://api.weixin.qq.com/sns/oauth2/access_token';
    var code = req.query.code;
    if(cache[code]){
        console.log('cache value');
        res.json(cache[code]);
    }else {
        rp({
            uri: uri,
            qs: req.query,
            useQuerystring: true,
            method: 'GET',
            json: true
        }).then(
            function (body) {
			   cache.put(code.toString(),body);
               res.json(body);
            }
        ).catch(function (err) {
            // handleError(res, err)
            console.log(err);
        });
    }

});

module.exports = router;
