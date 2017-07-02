/**
 * Created by douhongliang on 2017/7/2.
 */
var config = require('../../config.js');
var constant = require('../../constant.js');
var cache = require('memory-cache');
var rp = require('request-promise');

//微信菜单配置
function menuConfig(req, res) {
    var apiAccessToken = cache.get(constant.API_ACCESS_TOKEN);
    var  creteMenuUri ='https://api.weixin.qq.com/cgi-bin/menu/create?access_token=';
    var menu = constant.menu;
    var menu = req.body;
    console.log('create menu');
    console.log(' =============menu content start===========================');
    console.log(menu);
    console.log(' =============menu content end===========================');

    if (apiAccessToken) {
        console.log('create menu===cache token=======');
        rp({
            uri: creteMenuUri + apiAccessToken.access_token,
            body: menu,
            method: 'POST',
            json: true
        }).then(
            function (body) {
                res.json( body);
            }
        ).catch(function (err) {
            // handleError(res, err)
            console.log(err);
        });

    } else {
        console.log('create menu=== no cache token=======');
        var  uri ='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+config.appid+'&secret='+config.appsecret;
        rp({
            uri: uri,
            useQuerystring: true,
            method: 'GET',
            json: true
        }).then(
            function (body) {
                if(!body.errcode){
                    cache.put(constant.API_ACCESS_TOKEN, body, 7200 * 1000, function (key, value) {
                        console.log(constant.API_ACCESS_TOKEN +'is expires');
                    })
                }
                // var menu = req.body;
                rp({
                    uri: creteMenuUri + body.access_token,
                    body: menu,
                    method: 'POST',
                    json: true
                }).then(
                    function (body) {
                        res.json( body);
                    }
                ).catch(function (err) {
                    // handleError(res, err)
                    console.log(err);
                });

            }
        ).catch(function (err) {
            // handleError(res, err)
            console.log(err);
        });
    }
}

var model = {
    menuConfig:menuConfig
}
module.exports = model;
