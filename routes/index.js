var express = require('express');
var router = express.Router();


// module.exports = router;
module.exports = function (app) {
  /* GET home page. */

    app.use('/wechat',require('./wechat'))
    app.use('/wechat-config',require('./wechat-config'))
    app.use('/users',require('./users'))
    app.use('/register',require('./register'))

    app.use('/fz/homepage', function(req, res, next) {
        res.render('fz/homePage.html');
    });
    app.use('/fz/order', function(req, res, next) {
        res.render('fz/order.html');
    });
    app.use('/fz/myinfo', function(req, res, next) {
        res.render('fz/myInfo.html');
    });

    app.use('/fz/cpgl', function(req, res, next) {
        res.render('fz/cpgl.html');
    });
    app.use('/fz/xjcp', function(req, res, next) {
        res.render('fz/xjcp.html');
    });
    app.use('/', function(req, res, next) {
        res.render('index.html');
    });

};
