import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'/homes',name:'homes',component:()=>import('../views/TwRoute/homes.vue'),
        children:[
          {path:'/homes/follow',name:'follow',component:()=>import('../views/TwRoute/THRoute/follow.vue')},
          {path:'/homes/recommend',name:'recommend',component:()=>import('../views/TwRoute/THRoute/recommend.vue')},
          {path:'/homes/heat',name:'heat',component:()=>import('../views/TwRoute/THRoute/heat.vue')}
        ]
      },
      {path:'/dream',name:'dream',component:()=>import('../views/TwRoute/dream.vue')},
      {path:'/learn',name:'learn',component:()=>import('../views/TwRoute/learn.vue')},
      {path:'/market',name:'market',component:()=>import('../views/TwRoute/market.vue')},
      {path:'/my',name:'my',component:()=>import('../views/TwRoute/my.vue')}
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
