var express = require('express');
var router = express.Router();


// module.exports = router;
module.exports = function (app) {
  /* GET home page. */

    app.use('/wechat',require('./wechat'))
    app.use('/wechat-config',require('./wechat-config'))
    app.use('/users',require('./users'))
    app.use('/register',require('./register'))
    app.use('/fz',require('./fz'))
    app.use('/sk',require('./sk'))
    app.use('/cook',require('./cook'))


    app.use('/', function(req, res, next) {
        res.render('index.html');
    });

};
