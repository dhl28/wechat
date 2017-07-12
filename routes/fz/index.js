/**
 * Created by douhongliang on 2017/7/2.
 */
/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();


router.use('/homepage', function(req, res, next) {
    res.render('fz/homePage.html');
});
router.use('/order', function(req, res, next) {
    res.render('fz/order.html');
});
router.use('/myinfo', function(req, res, next) {
    res.render('fz/myInfo.html');
});

router.use('/cpgl', function(req, res, next) {
    res.render('fz/cpgl.html');
});
router.use('/xjcp', function(req, res, next) {
    res.render('fz/xjcp.html');
});
module.exports = router;