import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Film from '@/views/Film'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import nowplaying from '@/views/film/nowplaying'
import comingsoon from '@/views/film/comingsoon'



Vue.use(VueRouter) //注册路由
//路由路径写好之后  都需在组件中写上路由容器 <router-view></router-view>  

const routes = [
  //先在路由文件中导入对应的组件 后再添加路径
  // 查看重定向与正常路劲写法的区别
  {
    path: '/film',
    component: Film,
    children :[
      {
        path: 'nowplaying',
        component: nowplaying
      },
      {
        path: 'comingsoon',
        component: comingsoon
      },
      // 嵌套路由再次重定向  二级路由重定向
      {
        path: '',
        redirect: '/film/nowplaying'
      },
    ],

  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    //路由重定向 *优先级最低 匹配以上路径都加载不到
    //则匹配 Film
    path: '*',
    component: Film
  },


]


const router = new VueRouter({
  routes
})

export default router
