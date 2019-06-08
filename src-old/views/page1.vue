<template>
  <div>
    <h1>页面一:商品列表</h1>
    <ul>
      <li
      v-for="good in goods"
      :key=good.id
      >
        <!-- <router-link :to="`/detail/${good.id}/${good.name}`"> -->

        <!-- <router-link :to="{
          path: `/detail/${good.id}/${good.name}`
        }"> -->
        <router-link :to="{
          name: 'detail',
          params:{
            id: good.id,
            name: good.name
          }
        }">
          {{ good.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goods: [
        { id: 1, name: "苹果" },
        { id: 2, name: "香蕉" },
        { id: 3, name: "芒果" }
      ]
    }
  }
}
</script>
