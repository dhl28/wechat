var express = require('express');
var router = express.Router();
var rp = require('request-promise');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('user');
});
router.get('/accessToken', function (req, res) {
    var  uri = ' https://api.weixin.qq.com/sns/oauth2/access_token';
    console.log('node server catch the token req');
    console.log(req);
    console.log('req info is logged');
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
        handleError(res, err)
    });
});

module.exports = router;
