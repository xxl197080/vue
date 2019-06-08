import Vue from 'vue'
import App from './App.vue'
import router from './router' // index.js可以省略，会自动找这个文件中的index文件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
