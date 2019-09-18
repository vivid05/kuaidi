import VueRouter from 'vue-router'
import Index from './components/index/index.vue'
import Cinema from './components/Cinema/index.vue'
import Mine from './components/Mine/Mine.vue'
import Order from './components/index/order.vue'
import Login from './components/Mine/login.vue'
import Register from './components/Mine/register.vue'
import index from './components/Mine/index.vue'
import snack from './components/index/snack.vue'
var router=new VueRouter({
    routes:[
        { path: '/', redirect: '/index' },
        { path: '/index', component: Index },
        { path: '/Cinema', component: Cinema },
        { path: '/Mine', component: Mine,children:[{path:'index',component:index},{path:'login',component:Login},{path:'register',component:Register}] },
        {path:'/Order',component:Order},
        // {path:'/Login',component:Login},
        // {path:'/Register',component:Register},
        {path:'/snack',component:snack},
    ],
    linkActiveClass: 'active'
});
export default router;