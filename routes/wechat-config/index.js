/**
 * Created by douhongliang on 2017/7/2.
 */
/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();
var wechatModel = require('./wechat.model')

//配置微信菜单
router.post('/menu',wechatModel.menuConfig);

router.use('/menu', function (req, res, next) {
    res.render('wechat-config/menu');
});

module.exports = router;