<template>
  <div>
    <input type="text" v-model="inputVal" />
    <button @click="addTodo">添加</button>
    <ul>
      <Todoitem
      v-for="(todo,index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      >

      </Todoitem>
    </ul>

    <h1>商品列表</h1>
    <ul>
      <li
      v-for="good in goods"
      :key="good.id"
      >
        {{ good.name }}  --- {{ good.pirce }}
        <button>-</button>
        <button @click="addCart(good)">+</button>
      </li>
    </ul>
    <router-link to="/cart">查看购物车</router-link>
  </div>
</template>

<script>
import Todoitem from './Todoitem';
import { mapState, mapMutations,mapActions } from 'vuex';

export default {
  computed: {
    // ...mapState(['todos','goods']),
    ...mapState('todo', ['todos']),
    ...mapState('goods', ['goods']),
    inputVal: {
      get () {
        return this.$store.state.inputVal;
      },
      set (value) {
        // console.log(value);
        // this.$store.commit('todo/changeVal',value) // 或者想把changeVal用mapMutations引入进来在调用
        this.changeVal(value)
      }
    }
  },
  components:{
    Todoitem
  },
  methods: {
    // ...mapMutations(['addTodo']), //就不需要映射进来了，在actions里面运行
    // this.$store.commit('addTodo')

    // addTodo () {
    //   this.$store.dispatch('addTodo');
    // },
    ...mapMutations('todo',['changeVal']),
    ...mapActions('todo',['addTodo','initTodos']) ,//这一行代码相当于是上面的简写，因为通过辅助函数映射add进来了。
    ...mapActions('goods',['getGoods']),
    ...mapMutations('cart',['addCart'])
  },
  created () {
    this.initTodos();
    this.getGoods();
  }
}
</script>

