<template>
  <div>
    <h1>我是个人中心页面</h1>
    <!-- <router-link to="/card">卖座卡页面</router-link> -->
    <router-link :to="{ path: '/card', query: { name: '张三' } }">卖座卡页面</router-link>
    <hr>
    <router-link to='/money'>余额页面</router-link>
  </div>
</template>
