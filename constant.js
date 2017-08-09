/**
 * Created by dhl on 2017/6/7.
 */
var constant = {
    'host': 'http://123.207.143.129',
    'ACCESS_TOKEN_KEY': 'accessToken',
    'JS_API_TICKET': 'jsapiTicket',
    'API_ACCESS_TOKEN': 'apiAccessToken',
    'menu': {
        "button": [
            {
                "name": "我要吃饭",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "我",
                        "url": "http://www.soso.com/"
                    },
                    {
                        "type": "view",
                        "name": "我的订单",
                        "url": "http://www.soso.com/"
                    },{
                        "type": "view",
                        "name": "附近美食",
                        "url": "http://www.soso.com/"
                    }]
            },{
                "type": "view",
                "name": "我要做饭",
                "url": "http://douhl.cn/register/provider-step1"
            }]
    }
};
module.exports = constant;