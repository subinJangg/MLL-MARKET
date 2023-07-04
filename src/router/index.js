import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)

import MainPageHome from "@/components/main/MainPageHome"
import IntroMangLingLe from '@/components/navbar/about/IntroMangLingLe'
import ShoppingAll from '@/components/navbar/about/ShoppingAll'
import LoginMember from '@/components/navbar/topnavbar/login/LoginMember'
import FindId from '@/components/navbar/topnavbar/login/FindId'
import FindPass from '@/components/navbar/topnavbar/login/FindPass'
import JoinMember from '@/components/navbar/topnavbar/join/JoinMember'
import ShoppingCartList from '@/components/navbar/topnavbar/shoppingcart/ShoppingCartList'


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
    }, 

      //물품
    {
      path: '/about/ShoppingAll',
      name: 'ShoppingAll',
      component : ShoppingAll
    }, 

      // 로그인
    {
      path: '/topnavbar/login/LoginMember',
      name: 'LoginMember',
      component : LoginMember
    }, 

    // 아이디 찾기
    {
      path: '/topnavbar/login/FindId',
      name: 'FindId',
      component : FindId
    }, 

     // 비밀번호 찾기
    {
      path: '/topnavbar/login/FindPass',
      name: 'FindPass',
      component : FindPass
    }, 

      // 회원가입
    {
      path: '/topnavbar/join/JoinMember',
      name: 'JoinMember',
      component : JoinMember
    },

      // 쇼핑카트
    {
      path: '/topnavbar/shoppingcart/ShoppingCartList',
      name: 'ShoppingCartList',
      component : ShoppingCartList
    },  

  ]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}