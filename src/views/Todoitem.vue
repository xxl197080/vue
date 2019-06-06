<template>
  <li>
    {{ todo.name }} -- <button @click="delTodo(todo)">删除</button>
  </li>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'

export default {
  props: {
    // todo: String,
    todo: Object,
    index: Number
  },
  methods: {
    // ...mapMutations(['delTodo'])
    ...mapActions(['delTodo'])
  }
}
</script>
