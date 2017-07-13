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
         next:function () {
            window.location.href='/fz/xjcp'
        }
    },
    mounted:function () {
        var _this = this;

        new MultiPicker({
            input:'ipt-delivery',
            container:'deliverySelectContainer',
            jsonData:[{id:0,value:'自取'},{id:1,value:'送货上门'}],
            success:function (d) {
                _this.$data.delivery = d[0].value;
            }
        });

    }
})