// 入口文件
import Vue from 'vue';
import App from './App.vue'
import router from './router.js'
import store from './store'
// 1.1 导入路由的包
import VueRouter from 'vue-router';
import  Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
// 1.2 安装路由
Vue.use(VueRouter);
import VueResource from 'vue-resource';
import './lib/mui/css/mui.min.css'
import './lib/mui/css/feedback.css'
import './lib/mui/css/style.css'
import './lib/mui/js/mui.min.js'
// 2.2 安装 vue-resource
Vue.use(VueResource);
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.http.options.emulateJSON = true;
import { Panel } from 'vant';
import 'vant/lib/Panel/style';
Vue.use(Panel);
import { Button } from 'vant';
Vue.use(Button);
var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router, // 1.4 挂载路由对象到 VM 实例上
    //store // 挂载 store 状态管理对象
    store
});
