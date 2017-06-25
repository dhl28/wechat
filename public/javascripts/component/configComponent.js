/**
 * Created by dhl on 2017/6/11.
 */
var configModal ={

}
configModal.data = {
    msg:'this is config component'
}
configModal.methods ={
    createMenu:function () {
        console.log('createMenu event trigger');
        //获取jsapiTicket
        var menuContent = JSON.parse($('#menuContent').val());
        $.ajax({
            url: '/wechatConfig/menu',
            type:'post',
            contentType: "application/json; charset=utf-8",
            dataType:'json',
            data: JSON.stringify(menuContent),
        }).then(function (d) {
            console.log(d);
        })
    },
}
configModal.mounted= function () {
    console.log('config component mounted');
};

Vue.component('config', {
    template: '#config-tpl',
    data: function () {
        return configModal.data;
    },
    methods:configModal.methods,
    mounted:configModal.mounted
})