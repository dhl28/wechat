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
        toFzOrder:function () {
            window.location.href='/fz/order'
        },
        fbcs:function () {
            window.location.href='/cook/fbcs'
        }

    },
    mounted:function () {
        $('body').pagewalkthrough({
            name: 'introduction',
            steps: [{
                popup: {
                    content: '#walkthrough-1',
                    type: 'modal'
                }
            }, {
                wrapper: '.basic-info',
                popup: {
                    content: '#walkthrough-2',
                    type: 'tooltip',
                    position: 'bottom'
                }
            }, {
                wrapper: '.links-wrapper',
                popup: {
                    content: '#walkthrough-3',
                    type: 'tooltip',
                    position: 'bottom'
                }
            }, {
                wrapper: '.food-list .section-title-wrapper',
                popup: {
                    content: '#walkthrough-4',
                    type: 'tooltip',
                    position: 'bottom'
                }
            }, {
                wrapper: '.fix-footer .footer-wrapper',
                popup: {
                    content: '#walkthrough-5',
                    type: 'tooltip',
                    position: 'top'
                }
            }]
        });

        // Show the tour
        $('body').pagewalkthrough('show');
    }
})