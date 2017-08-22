import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueRouter from 'vue-router'
import routes from './router.config'

import store from './store'

import 'normalize.css'

require('./assets/css/reset.css')  // 全局使用重置样式

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',  // 切换路径模式 ---> history
  scrollBehavior: () => ({  // 滚动条的滚动行为，每次跳转页面后从页面顶部开始显示，不记住原来滚动条位置
      y: 0
  }),
  routes
});

Vue.prototype.$http = axios;  // 将axios添加到vue原型中，其他页面调用时只需要通过【this.$http】即可调用

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
