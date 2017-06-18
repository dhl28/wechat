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
                "type": "click",
                "name": "今日歌曲",
                "key": "V1001_TODAY_MUSIC"
            },
            {
                "name": "菜单",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "搜索",
                        "url": "http://www.soso.com/"
                    },
                    {
                        "type": "click",
                        "name": "赞一下我们",
                        "key": "V1001_GOOD"
                    }]
            }]
    }
};
module.exports = constant;