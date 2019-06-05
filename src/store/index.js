// 1、引入 vue
import Vue from 'vue';
// 2、引入 vuex
import Vuex from 'vuex';
// 3、调用 Vuex
Vue.use(Vuex);
// 4.创建仓库的实例对象
const store = new Vuex.Store({
  // 仓库的选项对象

  // state是数据或状态
  state: {
    title: 'hello-world'
  },
  // getters是针对state的二次计算后的数据，相当于computed
  getters: {
    // key - getter的名字，value - 值，是函数形式的，return
    // getters 函数能接收到state，也就是上面的state
    firstTitle (state) {
      return state.title.split('-')[0]
    },
    lastTitle (state) {
      return state.title.split('-')[1]
    },
  },

  mutations: {
    // key - mutation 的名字
    // value - 函数 接收到的 state
    changeTit (state,payload) {
      // setTimeout(() => {
      state.title = payload.name
      // }, 2000);
    }
  },
  actions: {

  }
})
// 5、暴露 store
export default store;
