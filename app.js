var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var routes = require('./routes/index');
var users = require('./routes/users');
var wechat = require('./routes/wechat');
var wechatConfig = require('./routes/wechatConfig');

var app = express();
//set app engine
app.engine('html', ejs.__express);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/bower_components',express.static(path.join(__dirname, 'bower_components')));
// app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routes);
app.use('/users', users);
app.use('/wechat',wechat);
app.use('/wechatConfig',wechatConfig);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.render('index');
});

module.exports = app;
