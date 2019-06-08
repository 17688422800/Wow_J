import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import VueRouter from "vue-router"


// element: 1.导入组件
import ElementUI from "element-ui";
// element的样式
import 'element-ui/lib/theme-chalk/index.css';

import Login from './pages/Login.vue'
Vue.prototype.$axios = axios;
// element: 2.注册element插件
Vue.use(ElementUI);
// 注册路由
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {path: "/login", component: Login},
  {path: "/", component: Login},
];

// 路由实例
const router = new VueRouter({ routes });
new Vue({
  render: h => h(App),
  // 挂载路由
  router
}).$mount('#app')
