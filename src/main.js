import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import VueRouter from "vue-router"


// element: 1.导入组件
import ElementUI from "element-ui";
// element的样式
import 'element-ui/lib/theme-chalk/index.css';

import Login from './pages/Login.vue';
import Admin from './pages/Admin.vue'
import GoodsList from './pages/GoodsList.vue'
import CategoryList from './pages/CategoryList.vue'
Vue.prototype.$axios = axios;
// element: 2.注册element插件
Vue.use(ElementUI);
// 注册路由
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {
    path:'/',
    redirect: '/admin/goods-list',
    meta:'首页'
  },
  {
    path: "/login", 
    component: Login,
    meta:'登陆'
  },
  {
    path:'/admin',
    component: Admin,
    meta:'后台管理',
    children:[
    {
      path:'goods-list',
      component:GoodsList,
      meta:'商品列表'
    },
    {
      path:'category-list',
      component:CategoryList,
      meta:'栏目列表'
    }

  ]},
];

// 路由实例
const router = new VueRouter({ routes });
new Vue({
  render: h => h(App),
  // 挂载路由
  router
}).$mount('#app')