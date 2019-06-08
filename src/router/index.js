import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress'; // 引入进度条插件
import 'nprogress/nprogress.css'; // 还需要引入该插件的css
// import Index from '../views/index/index.vue';
// import Home from '../views/index/home.vue';
// import About from '../views/index/about.vue';
// import Detail from '../views/detail/index.vue';
// import Center from '../views/index/center.vue';
// import Card from '../views/card/index.vue';
// import Money from '../views/money/index.vue';
// import Login from '../views/login/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: ()=> import(/* webpackChunkName: "index" */'../views/index/index.vue'),
      children: [
        {
          path: 'home',
          component: ()=> import('../views/index/home.vue'),
        },
        {
          path: 'about',
          component: ()=> import('../views/index/about.vue'),
        },
        {
          path: 'center',
          component: ()=> import('../views/index/center.vue'),
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: ()=> import('../views/detail/index.vue'),
      meta: {
        requireLogin: true
      },
      beforeEnter: (to,from,next)=> {
        console.log('详情页独享')
        next()
      }
    },
    {
      path: '/card',
      component: ()=> import('../views/card/index.vue'),
      name: 'card',
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to,from,next) => {
      //   // 判断是否有登陆
      //   if ( window.localStorage.getItem('userInfo')) {
      //     // 登陆了，让它去
      //     next()
      //   }else{
      //     // 没登陆，跳去登陆页面
      //     // next('/login')
      //     // 传参数过去，知道是想去哪里点击的登陆
      //     next({
      //       path: '/login',
      //       query: {
      //         // redirect: to.path  // 想去哪个页面，通过query传递过去，或者name和params传递
      //         // 通过to.path获取到想去的页面，如果带有参数，to.path是不能传递参数过去的。
      //         redirect: to.fullPath // to.fullPath 能拿到传递的参数(url?后面的参数)
      //       }
      //     })
      //   }
      // }
    },
    {
      path: '/money',
      component: ()=> import('../views/money/index.vue'),
      name: 'money',
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to,from,next) => {
      //   // 判断是否有登陆
      //   if ( window.localStorage.getItem('userInfo')) {
      //     // 登陆了，让它去
      //     next()
      //   }else{
      //     // 没登陆，跳去登陆页面
      //     // next('/login')
      //     // 传参数过去，知道是想去哪里点击的登陆
      //     next({
      //       path: '/login',
      //       query: {
      //         // redirect: to.path  // 想去哪个页面，通过query传递过去，或者name和params传递
      //         // 通过to.path获取到想去的页面，如果带有参数，to.path是不能传递参数过去的。
      //         redirect: to.fullPath // to.fullPath 能拿到传递的参数(url?后面的参数)
      //       }
      //     })
      //   }
      // }
    },
    {
      path: '/login',
      component: ()=> import('../views/login/index.vue'),
      name: 'login'
    }
  ]
})

/**
 * 全局前置守卫(beforeEach)
 * 接收一个函数，函数中有三个参数：to，form，next,分别代表要去的路由，来自哪个路由，是否让它去。
 * next：
 * 1、如果直接调用，那么就相当于放行。
 * 2、如果调用，但是传递了一个false，就是不放行。
 * 3、如果不调用，也是不放行。
 * 4、调用并且里面可以传递路由的path路径或者是路由的对象信息。那么久重定向到我们的参数所指定的url地址。
 */
router.beforeEach((to,from,next) =>{
  NProgress.start()
  // console.log(to)
  // console.log(from)
  // console.log('守卫前置')
  // next();

  // 路由拦截
  // 判断是否去卖座卡页面或者余额页面

  // if ( to.path === '/card' || to.path === '/money' ){
  if(to.meta.requireLogin){
    // 判断是否有登陆
    if ( window.localStorage.getItem('userInfo')) {
      // 登陆了，让它去
      next()
    }else{
      // 没登陆，跳去登陆页面
      // next('/login')
      // 传参数过去，知道是想去哪里点击的登陆
      next({
        path: '/login',
        query: {
          // redirect: to.path  // 想去哪个页面，通过query传递过去，或者name和params传递
          // 通过to.path获取到想去的页面，如果带有参数，to.path是不能传递参数过去的。
          redirect: to.fullPath // to.fullPath 能拿到传递的参数(url?后面的参数)
        }
      })
    }
  }else{
    next();
  }
})

router.afterEach((to,from) =>{
  NProgress.done ()
  // console.log('守卫后置')
})

export default router;
