<template>
  <div>
    <h1>详情页</h1>
    {{ this.$route.params.name }} <br>
    {{ id }}
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ['id', 'name'],
  mounted () {
    console.log(this.$route) // 当前匹配的路由对象信息
    console.log(this.$router) // 路由器的实例对象，里面有一些方法
    console.log(this.id, this.name)
  }
}
</script>
