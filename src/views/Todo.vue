<template>
  <div>
    <input type="text" v-model="inputVal" />
    <button @click="add">添加</button>
    <ul>
      <Todoitem
      v-for="(todo,index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      >

      </Todoitem>
    </ul>
  </div>
</template>

<script>
import Todoitem from './Todoitem';
import { mapState, mapMutations,mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['todos']),
    inputVal: {
      get () {
        return this.$store.state.inputVal;
      },
      set (value) {
        // console.log(value);
        this.$store.commit('changeVal',value)
      }
    }
  },
  components:{
    Todoitem
  },
  methods: {
    // ...mapMutations(['addTodo']), //就不需要映射进来了，在actions里面运行
    // this.$store.commit('addTodo')

    // add () {
    //   this.$store.dispatch('add');
    // },
    ...mapActions(['add','initTodos']) ,//这一行代码相当于是上面的简写，因为通过辅助函数映射add进来了。

  },
  created () {
    this.initTodos()
  }
}
</script>

