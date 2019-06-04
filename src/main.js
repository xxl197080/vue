import Vue from 'vue'
import App from './App.vue'
// import '../mockdata/index'
import http from '../utils/http';

Vue.config.productionTip = false;
// 将封装好的 axios 添加到 Vue 原型上
Vue.prototype.$http = http;
new Vue({
  render: h => h(App)
}).$mount('#app')
