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
            window.location.href='/cpgl'
        },
        toMyInfo:function () {
            window.location.href='/fz/myinfo'
        },
        toHomePage:function () {
            window.location.href='/fz/homepage'
        },
        toProcess:function () {
            window.location.href='/cook/process'
        }

    },
    mounted:function () {

    }
})