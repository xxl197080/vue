<template>
  <div>
    <h1>page1</h1>
    {{ name }}
    <p>我是仓库中的title：{{ title }}</p>
    <p>我是自身中的计算属性firstName：{{ firstName }}</p>
    <p>我是仓库中的firstTitle：{{ firstTitle }}</p>
    <p>我是仓库中的lastTitle：{{ lastTitle }}</p>
    <button @click="fn1">修改title为 鸡你-太美</button>

  </div>
</template>
<script>
// import Vuex from 'vuex';
// 使用结构方法
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  data () {
    return {
      name: '张三'
    }
  },
  // computed: {
  //   title () {
  //     return this.$store.state.title;
  //   }
  // },

  computed: {
    ...mapState(['title']),
    ...mapGetters(['firstTitle','lastTitle']),
    firstName () {
      return this.name.split('')[0]
    }
  },
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   // page1Title: state => state.title

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   // page1Title: 'title'

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   page1Title (state) {
  //     return state.title
  //   }
  // }),

  methods: {
    // changeTit (payload){
    //   this.$store.commit({
    //     type: 'changeTit',
    //     ...payload  // payload 是一个对象
    //   })
    // },
    ...mapMutations(['changeTit']),// 这个写法是利用辅助函数简写

    fn1 () {
      this.changeTit({ name: '只因你-太美' })

      // console.log(this.$store.state.title)
      // this.$store.commit('changeTit','只因你-太美')
      // this.$store.commit({
      //   type: 'changeTit',// 传对象的形式一定要有type，type的值是mutations的名字
      //   name:'只因你-太美'
      // })
    }
  },
  created () {
    console.log(this.$store.state.title)
  }
}
</script>
