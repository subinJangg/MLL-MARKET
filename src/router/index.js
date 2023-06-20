import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPageHome from "@/components/main/MainPageHome";
//import testFile from "@/components/main/testFile";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes : [
    { 
      path : '/', 
      name : 'MainPageHome',
      component : MainPageHome
    },
      //망링레소개
    {
      path: '/about/IntroMangLingLe',
      name: 'IntroMangLingLe',
      component: () => import('@/components/navbar/about/IntroMangLingLe.vue')
    }, 
      //물품
    {
      path: '/about/ShoppingAll',
      name: 'ShoppingAll',
      component: () => import('@/components/navbar/about/ShoppingAll.vue')
    }, 
      // 로그인
    {
      path: '/topnavbar/login/LoginMember',
      name: 'LoginMember',
      component: () => import('@/components/navbar/topnavbar/login/LoginMember.vue')
    }, 
      // 회원가입
    {
      path: '/topnavbar/join/JoinMember',
      name: 'JoinMember',
      component: () => import('@/components/navbar/topnavbar/join/JoinMember.vue')
    },
      // 쇼핑카트
    {
      path: '/topnavbar/shoppingcart/ShoppingCartList',
      name: 'ShoppingCartList',
      component: () => import('@/components/navbar/topnavbar/shoppingcart/ShoppingCartList.vue')
    },  

  ], 
})



export default router;