<template>
<div>
  <li>
    {{todo}} -- <button @click="delTodo">删除</button>
  </li>
</div>
</template>

<script>
export default {
  props: {
    todo: String,
    index: Number,
    id: Number
  },
  methods: {
    delTodo () {
      this.$emit('abc', this.index, this.id);
    }
  }
}
</script>

<style>

</style>
