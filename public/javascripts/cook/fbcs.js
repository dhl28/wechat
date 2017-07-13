/**
 * Created by douhongliang on 2017/7/7.
 */
/**
 * Created by douhongliang on 2017/7/3.
 */
var app = new Vue({
    el: '.container',
    data: {
        startTime:null,
        endTime:null,
        csmc:null
    },
    methods:{
         next:function () {
            window.location.href='/cook/dzcs'
        }
    },
    mounted:function () {
        var _this = this;
        var cal = new Calendar({
            target:'.calendar-wrap',
            className: 'cal',
            tagDates: [1,5],
            todayText: '今天',
            year: 2016,
            month: 4,
            onReady: function () {
                $('.button').css('display','block');
            },
            onChangeMonthBefore: function (dateObj, type) {

            },
            onSelect: function (dateObj, e) {

            },
            onChangeMonth: function (dateObj) {

            }
        });

        var currentYear = new Date().getFullYear();
        new DateSelector({
            input:'startTime',
            container:'startTimeContainer',
            type:0,
            param:[0,0,0,1,1],
            beginTime:[],
            endTime:[],
            recentTime:[],
            success:function (d) {
                _this.$data.startTime = d.join((':'))
            }
        });
        new DateSelector({
            input:'endTime',
            container:'endTimeContainer',
            type:0,
            param:[0,0,0,1,1],
            beginTime:[],
            endTime:[],
            recentTime:[],
            success:function (d) {
                _this.$data.endTime = d.join((':'))
            }
        });

        new MultiPicker({
            input:'csmc',
            container:'csmcSelectContainer',
            jsonData:[{id:0,value:'宫保鸡丁'},{id:1,value:'清蒸鲈鱼'},{id:2,value:'京酱肉丝'},
                {id:3,value:'龙抄手'},{id:4,value:'大煮干丝'}],
            success:function (d) {
                _this.$data.csmc = d[0].value;
            }
        });

    }
})