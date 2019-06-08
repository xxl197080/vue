<template>
  <div>
    <h1>我是home组件</h1>
    <!-- <a href="#/page1">pag1</a>
    <hr>
    <a href="#/page2">pag2</a> -->
    <router-link :to="{name : 'page1'}">page1</router-link>
    <hr>
    <router-link replace :to="{name : 'page2'}">page2</router-link>
    <hr>
    <router-link to="/login">登陆页面</router-link>

    <!-- 路由的视图 -->
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.router-link-active{
  color:red;
}
</style>
