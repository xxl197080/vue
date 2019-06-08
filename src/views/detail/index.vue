<template>
  <div>
    <h1>我是详情页</h1>
    <p>{{ $route.params.id }}</p>
    <p>{{ info }}</p>

    <router-link to="/detail/1">去苹果</router-link><br>
    <router-link to="/detail/2">去香蕉</router-link><br>
    <router-link to="/detail/3">去橘子</router-link>

  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {}
    }
  },
  // watch: {
  //   $route (newVal,oldVal) {
  //     this.getGoods()
  //   }
  // },
  created () {
    this.getGoods();
  },
  methods:{
    getGoods (id = this.$route.params.id) {
      // let id = id || this.$route.params.id; //这样写相当于上面这样写
      fetch(`http://localhost:3000/goods/${id}`)
      .then(response => response.json())
      .then(res =>{
        this.info = res;
      })
    }
  },
  beforeRouteEnter (to,from,next) {
    console.log('进入当前组件')
    next()
  },
  beforeRouteUpdate (to,from,next) {
    console.log('当前组件更新')
    let newId = to.params.id;
    this.getGoods(newId); // 更新进入之后，还没next，url地址还没变,所以要从to里面拿到去哪个地址的id
    next()
  },
  beforeRouteLeave (to,from,next) {
    console.log('离开当前组件');
    next()
  }
}
</script>

