/**
 * Created by douhongliang on 2017/7/7.
 */
/**
 * Created by douhongliang on 2017/7/3.
 */
var app = new Vue({
    el: '.container',
    data: {
        isActive:false
    },
    methods:{
        toCpgl:function () {
            window.location.href='/fz/cpgl'
        },
        toFzHomePage:function () {
            window.location.href='/fz/homepage'
        },
        toFzOrder:function () {
            window.location.href='/fz/order'
        }

    },
    mounted:function () {
        var _this = this;
        var href = window.location.href;
        if(href.indexOf('myinfo')>-1){
            _this.$data.isActive = true;
        }
    }
})