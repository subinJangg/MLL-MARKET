import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)


import MainPageHome from "@/components/main/MainPageHome"
import IntroMangLingLe from '@/components/navbar/about/IntroMangLingLe'
import ShoppingAll from '@/components/navbar/about/ShoppingAll'
import LoginMember from '@/components/navbar/topnavbar/login/LoginMember'
import JoinMember from '@/components/navbar/topnavbar/join/JoinMember'
import ShoppingCartList from '@/components/navbar/topnavbar/shoppingcart/ShoppingCartList'

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import MainPageHome from "@/components/main/MainPageHome";
//import testFile from "@/components/main/testFile";

// Vue.use(VueRouter);

// export const router = new VueRouter({
//   mode: 'history',
  const routes = [
    { 
      path : '/', 
      name : 'MainPageHome',
      component : MainPageHome
    },
      //망링레소개
    {
      path: '/about/IntroMangLingLe',
      name: 'IntroMangLingLe',
      component : IntroMangLingLe
     // component: () => import('@/components/navbar/about/IntroMangLingLe.vue')
    }, 
      //물품
    {
      path: '/about/ShoppingAll',
      name: 'ShoppingAll',
      component : ShoppingAll
     // component: () => import('@/components/navbar/about/ShoppingAll.vue')
    }, 
      // 로그인
    {
      path: '/topnavbar/login/LoginMember',
      name: 'LoginMember',
      component : LoginMember
      //component: () => import('@/components/navbar/topnavbar/login/LoginMember.vue')
    }, 
      // 회원가입
    {
      path: '/topnavbar/join/JoinMember',
      name: 'JoinMember',
      component : JoinMember
     // component: () => import('@/components/navbar/topnavbar/join/JoinMember.vue')
    },
      // 쇼핑카트
    {
      path: '/topnavbar/shoppingcart/ShoppingCartList',
      name: 'ShoppingCartList',
      component : ShoppingCartList
    //  component: () => import('@/components/navbar/topnavbar/shoppingcart/ShoppingCartList.vue')
    },  

  ]
// })

// export default router;



// 라우터 설계
// const routes = [
//     { path: '/', component: MainPageHome },
//     { path: '/about/IntroMangLingLe', component: IntroMangLingLe},
//     { path: '/about/ShoppingAll', component: ShoppingAll },
//     { path: '/login/LoginMember', component: LoginMember },
//     { path: '/join/JoinMember', component: JoinMember },
//     { path: '/shoppingcart/ShoppingCartList', component: ShoppingCartList },

// ]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}