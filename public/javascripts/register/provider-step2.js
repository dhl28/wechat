/**
 * Created by douhongliang on 2017/7/3.
 */

var app = new Vue({
    el: '.container',
    data: {
    },
    methods:{
        location:function () {
            console.log('to be finish');
        }
    },
    mounted:function () {
        //出生日期
        new DateSelector({
            input:'birthday',
            container:'birthDayContainer',
            type:0,
            param:[1,1,1,0,0],
            beginTime:[],
            endTime:[],
            recentTime:[],
            success:function (d) {
                $('#birthday').val(d.join(('-')));
            }
        });

        //地区选择
        var url = '/public/libs/multi-picker/city.js';
        $.getScript(url,function (d) {
           eval(d);
            new MultiPicker({
                input:'J_city_select',
                container:'citySelectContainer',
                jsonData:$city,
                success:function (d) {
                    console.log(d);
                    var path = [];
                    d.map(function (p) {
                       if(p.value !=='请选择'){
                           path.push(p.value);
                       }
                    })
                    $('#J_city_select').val(path.join('-'));
                }
            });
        });
        //擅长菜系
        new MultiPicker({
            input:'cuisine',
            container:'cuisineSelectContainer',
            jsonData:[{id:0,value:'川菜'},{id:1,value:'鲁菜'},{id:2,value:'粤菜'},
                {id:3,value:'淮扬菜'},{id:4,value:'其他'}],
            success:function (d) {
                $('#cuisine').val(d[0].value);
            }
        });


    }
})