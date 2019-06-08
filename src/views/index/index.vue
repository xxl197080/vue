<template>
  <div>
    <router-view></router-view>
    <ul>
      <li>
        <router-link to="about">去关于页面</router-link>
      </li>
      <li>
        <router-link  to="center">去个人中心页面</router-link>
      </li>
      <li>
        <router-link  to="home">回到首页页面</router-link>
      </li>
    </ul>
  </div>
</template>
