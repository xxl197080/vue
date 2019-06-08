<template>
  <div>
    <h1>登陆页面</h1>
    <button @click="login">点击登陆成功</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      let userInfo = {
        username: '张三',
        password: 123456
      }
      setTimeout(()=> {
        window.localStorage.setItem('userInfo',JSON.stringify(userInfo) );
        // let toPage = this.$route.query.redirect;  // 接收传递过来想去的页面地址
        let toPage = this.$route.query.redirect || '/center'; //如果用户直接通过login页面登陆，没传递参数，就让他跳转到个人中心页面
        this.$router.replace(toPage)
      },2000)
    }
  }
}
</script>

