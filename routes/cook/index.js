/**
 * Created by douhongliang on 2017/7/2.
 */
/**
 * Created by dhl on 2017/6/6.
 */
var express = require('express');
var router = express.Router();


router.use('/fbcs', function(req, res, next) {
    res.render('cook/fbcs.html');
});

router.use('/dzcs', function(req, res, next) {
    res.render('cook/dzcs.html');
});

module.exports = router;