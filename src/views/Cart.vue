<template>
  <div>
    <h1>我是购物车页面</h1>
    <ul>
      <li
      v-for="good in carts"
      :key="good.id"
      >
        {{ good.name }} -- {{ good.pirce }} -- {{ good.num }}
      </li>
      <span>总价：{{ cartTotal }}</span>
    </ul>
    <router-link to="/goods">返回商品列表</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    // ...mapState(['carts']),
    ...mapState('cart', ['carts']),
    ...mapGetters('cart',['cartTotal'])
  },
  created () {
    console.log(this.carts)
  }
}
</script>
