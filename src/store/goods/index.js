// 这是商品goods仓库模块

export default {
  // 仓库的子模块都给加上 namespaced为true ，防止同名冲突
  namespaced: true,
  state : {
    goods: []
  },
  mutations: {
    setGoods (state,goods) {
      state.goods = goods;
    }
  },
  actions: {
    getGoods ({ commit }) {
      fetch('http://localhost:3000/goods')
        .then(response => response.json())
        .then(res => {
          // console.log(res);
          commit('setGoods',res);
        })
    }
  }
}
