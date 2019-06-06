import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  inputVal: '睡觉',
  todos: []
}

const getters = {

}

const mutations = {
  changeVal (state,payload) {
    state.inputVal = payload;
  },
  initTodos (state,todos) {
    state.todos = todos;
  },
  addTodo (state) {
    let todo = {
      id: state.todos.length + 1,
      name: state.inputVal
    }
    state.todos.push(todo);
  },
  delTodo (state,payload) {
    // let index = payload.index;
    // state.todos.splice(index,1);

    //通过id查找下标删除
    let index = state.todos.findIndex(item => item.id === payload);
    console.log(index)
    state.todos.splice(index,1);
  }
}

const actions = {
  // context可以理解为 this.$store
  // add ({ state,commit }){   //解构写法
  add (context) {
    fetch('http://localhost:3000/todos',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: context.state.inputVal })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        // 请求成功之后再去修改仓库
        // this.addTodo();
        context.commit({
          type: 'addTodo'
        })
      })
  },

  /**
   * 初始化的todos数据
   */
  initTodos ({ commit }) {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit('initTodos',res)
      })
  },
  /**
   * 删除某条todo
   * @param {Object} todo 当前需要删除的todo的对象
   */
  delTodo ({ commit, state },todo) {
    // 0、先把仓库中todos备份
    // let newTodos = state.todos;// 这样是引用类型,下面修改也会影响
    let newTodos = [...state.todos];
    // 1、先删除仓库中的todo
    commit('delTodo',todo.id);
    // 2、发请求厂库删除数据
    fetch(`http://localhost:3000/todos/${todo.id}`,{
      method: 'delete'
    }).then(response => response.json())
      .then(res => {
        // 删除成功
        // console.log(res)
        alert('删除成功')
      })
      .catch(error => {
        // 删除失败
        console.log('删除失败')
        commit('initTodos',newTodos)
      })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
