// 这是购物车cart仓库模块

export default {
  // 仓库的子模块都给加上 namespaced为true ，防止同名冲突
  namespaced: true,
  state: {
    carts:[]
  },
  getters: {
    // 购物车商品总价
    cartTotal (state) {
      let money = 0;
      state.carts.forEach(cart => {
        money += cart.pirce * cart.num
      });
      return money;
    }
  },
  mutations: {
    addCart (state,good) {
      // 1、得到当前要添加商品的id，并且判断购物车中是否有该商品
      let id = good.id;
      let index = state.carts.findIndex(good => good.id === id);
      if (index >= 0){
        // 在购物车中找到了该商品，数量加一
        state.carts[index].num +=1
      }else {
        state.carts.push({...good,num: 1});
      }
    }
  }
}
