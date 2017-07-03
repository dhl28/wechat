/**
 * Created by douhongliang on 2017/7/2.
 */
/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();

//配置微信菜单

router.use('/provider-step1', function (req, res, next) {
    res.render('register/provider-step1');
})
;router.use('/provider-step2', function (req, res, next) {
    res.render('register/provider-step2');
});

module.exports = router;