/**
 * Created by dhl on 2017/6/11.
 */
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
var User = {template: '<user></user>'}
var Bar = {template: '<div>bar</div>'}

var data = {
    msg:'this is user component'
};


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
var routes = [
    {path: '/users', component: User},
    {path: '/bar', component: Bar}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
    // mode: 'history',
    routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
var app = new Vue({
    router: router,
    methods: {
        linkTo: function (url) {
            router.push(url)
        }
    }
}).$mount('#app')
