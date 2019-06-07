import Vue from 'vue';
import Vuex from 'vuex';
//引入todo仓库模块
import todo from './todo'
//引入goods仓库模块
import goods from './goods'
//引入cart仓库模块
import cart from './cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    goods,
    cart
  }
})
