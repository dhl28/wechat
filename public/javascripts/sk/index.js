/**
 * Created by douhongliang on 2017/7/7.
 */
/**
 * Created by douhongliang on 2017/7/3.
 */
var app = new Vue({
    el: '.container',
    data: {
        isActive:false,
        items:[]
    },
    methods:{
        toCpgl:function () {
            window.location.href='/cpgl'
        },
        toMyInfo:function () {
            window.location.href='/fz/myinfo'
        },
        toFzOrder:function () {
            window.location.href='/fz/order'
        },
        fbcs:function () {
            window.location.href='/cook/fbcs'
        }

    },
    mounted:function () {
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,
            autoplay:3000,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            prevButton:null,
            nextButton:null,
        })
        //食品列表
        var i=0,total = 10,list=[];
        for(;i<total;i++){
            list.push('item'+i)
        }
        this.$data.items = list;
    }})