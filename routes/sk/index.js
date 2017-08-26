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
router.use('/found', function(req, res, next) {
    res.render('sk/found.html');
});
router.use('/wap', function(req, res, next) {
    res.render('sk/wap.html');
});
router.use('/shihua', function(req, res, next) {
    res.render('sk/shihua.html');
});
router.use('/my', function(req, res, next) {
    res.render('sk/my.html');
});
router.use('/shoppingcart', function(req, res, next) {
    res.render('sk/shoppingCart.html');
});

module.exports = router;