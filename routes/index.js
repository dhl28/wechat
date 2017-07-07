var express = require('express');
var router = express.Router();


// module.exports = router;
module.exports = function (app) {
  /* GET home page. */

    app.use('/wechat',require('./wechat'))
    app.use('/wechat-config',require('./wechat-config'))
    app.use('/users',require('./users'))
    app.use('/register',require('./register'))

    app.use('/fzzy', function(req, res, next) {
        res.render('user/fzzy.html');
    });
    app.use('/cpgl', function(req, res, next) {
        res.render('user/cpgl.html');
    });
    app.use('/xjcp', function(req, res, next) {
        res.render('user/xjcp.html');
    });
    app.use('/', function(req, res, next) {
        res.render('index.html');
    });

};
