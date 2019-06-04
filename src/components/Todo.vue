<template>
  <div class="todo">
    <input
    v-model="inputVal"
    type="text"
    placeholder="请输入内容...">
    <button @click="addTodo">添加事件</button>

    <ul>
      <todo-item
      v-for="(todo,index) in todos"
      :key="index"
      :index="index"
      @abc="delTodo"
      :id="todo.id"
      :todo="todo.name" />
    </ul>
  </div>
</template>

<script>
import todoItem from './todoItem.vue';
import axios from 'axios';
// import '../../mockdata/index';

export default {
  data () {
    return {
      inputVal: '',
      todos: []
    }
  },
  components: {
    todoItem
  },
  methods: {
    addTodo () {
      if (this.inputVal) {
        // this.todos.push({
        //   "name":this.inputVa
        //   });
        // this.inputVal = '';
        let obj = {
          "name": this.inputVal
        }
        this.$http.post('/todos', obj)
          .then(res => {
            console.log("新增成功");
            console.log(res);
            // let res = response.data;
            this.todos.push(res);
          })
          .catch(err => {
            console.log('新增失败:' + err)
          })
      }
    },
    delTodo (index, id) {
      // this.todos.splice(index,1)  如果前端页面删除写在这会立马删除，万一后台删除失败就尴尬了
      this.$http.delete(`/todos/${id}`)// 删除不是传id，是再url后面加id
        .then(res => {
          console.log('删除成功');
          this.todos.splice(index, 1)// 后台删除数据后页面再删除
        })
        .catch(err => {
          console.log('网络异常,请稍后重试' + err);
        })
    }
  },
  // created () {
  //   axios.get('http://localhost:8080/todos.json')
  //     .then(response => {
  //       let res = response.data;
  //       if (res.code === 0) {
  //         this.todos = res.data;
  //       } else {
  //         alert('网络异常，请稍后重试')
  //       }
  //     })
  // }
  created () {
    this.$http.get('/todos')
      .then(res => {
        console.log(res);
        // let res = response.data;
        this.todos = res;
      })
      .catch(err => {
        alert("网络异常");
        console.log(err);
      })
  }
}
</script>
