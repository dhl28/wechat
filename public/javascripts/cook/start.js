/**
 * Created by douhongliang on 2017/7/7.
 */
/**
 * Created by douhongliang on 2017/7/3.
 */
var app = new Vue({
    el: '.container',
    data: {
        delivery:'自取',
        count:null
    },
    methods:{
        toHome:function () {
            window.location.href='/fz/homepage'
        },
        next:function () {
            window.location.href='/cook/process'
        }
    },
    mounted:function () {

    }
})