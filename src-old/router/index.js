// 1、先引入 vue 和 vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../views/page1.vue'
import Page2 from '../views/page2.vue'
import Detail from '../views/detail.vue'
import Home from '../views/home.vue'
import Login from '../views/login.vue'

// 2、使用VueRouter插件
Vue.use(VueRouter)
// 3、配置路由规则  [{},{},{}]
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        // url: /home/page1
        name: 'page1',
        path: 'page1',
        component: Page1
      },
      {
        name: 'page2',
        path: 'page2',
        component: Page2
      },
      {
        // 加上这个之后，访问localhost:8080/home 会自动重定向到 /home/page1
        path: '',
        redirect: '/home/page1'
      }
    ]
  },
  {
    // 通过 ：来指定后面的id是动态路由参数
    name: 'detail',
    path: '/detail/:id/:name',
    component: Detail,
    // 设置props为true，在Detial组件中就可以使用 props 来定义id与name，并且使用props接收并使用id和name，
    // 就不需要使用this.$route.params.id 获取了。
    props: true
  },
  {
    name: 'login',
    alias: '/haha', // 定义了一个别名，当地址为haha也能跳转到login页面
    path: '/login',
    component: Login
  },
  {
    // 当url地址没有匹配到上面的规则的时候，就会匹配*，让url重定向到了 /home/page1
    path: '*',
    redirect: '/home/page1'
  }
]
// 4、实例化路由器对象
const router = new VueRouter({
  mode: 'history',
  routes
})
// 5、将第四步的router暴露出去
export default router
