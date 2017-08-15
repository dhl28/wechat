/**
 * Created by douhongliang on 2017/7/2.
 */
/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();


router.use('/index', function(req, res, next) {
    res.render('sk/index.html');
});

router.use('/myinfo', function(req, res, next) {
    res.render('sk/myInfo.html');
});

module.exports = router;