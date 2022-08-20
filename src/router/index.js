import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/collect.vue'),
    meta:{
      title:'我的收藏_穷游'
    },
  },
  {
    path: '/hotelpro',
    name: 'hotelpro',
    component: () => import('../views/HotelPro.vue'),
    meta:{
      title:'酒店详情_穷游'
    },
  },
  {
    path: '/citypro',
    name: 'citypro',
    component: () => import('../views/CityPro.vue'),
    meta:{
      title:'城市详情_穷游'
    },
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    meta:{
      title:'首页_穷游'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      hideFooter:true,
      hideHeader:true,
      title:'登录页面_穷游'
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      hideFooter:true,
      hideHeader:true,
      title:'注册页面_穷游'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // console.log('到哪去to:',to);
  // console.log('当前from:',from);

  // 修改标签栏标题
  document.title=to.meta.title
  next() //放行：允许路由跳转，类似express的拦截中间件
})


export default router
