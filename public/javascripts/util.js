/**
 * Created by dhl on 2017/6/7.
 */
var util = {};
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

util.getQueryString = getQueryString;