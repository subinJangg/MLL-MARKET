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

    {
      path: '/about/IntroMangLingLe',
      name: 'IntroMangLingLe',
      component: () => import('@/components/about/IntroMangLingLe.vue')
    }, //망링레소개

    {
      path: '/about/ShoppingAll',
      name: 'ShoppingAll',
      component: () => import('@/components/about/ShoppingAll.vue')
    }, //쇼핑리스트

    {
      path: '/login/LoginMember',
      name: 'LoginMember',
      component: () => import('@/components/login/LoginMember.vue')
    }, // 로그인

    {
      path: '/login/JoinMember',
      name: 'JoinMember',
      component: () => import('@/components/login/JoinMember.vue')
    } // 회원가입


  ], 
})



export default router;