/**
 * Created by dhl on 2017/6/11.
 */

var app = new Vue({
    el: '#app',
    data: {
        msg:'this is index html',
    },
    methods:{
        goHome:function () {
            window.location.href='/';
        },
        goProviderRegister:function () {
            window.location.href='/register/provider-step1';
        }
    }

})
