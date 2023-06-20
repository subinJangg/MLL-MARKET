<template>
  <div>
    <header>
      <ul class="nav justify-content-end bg-light" sytle="margin-top:20px">
        <!-- 로그인 화면 -->
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'LoginMember'}" 
          > LOGIN </router-link>
        </li>

        <!-- 회원가입 화면 -->
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'JoinMember'}" 
          > JOIN </router-link>
        </li>

        <!-- 쇼핑카트 -->
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'ShoppingCartList'}" 
          > CART </router-link>
        </li>
      </ul>

      <!-- 메인 로고 -->
      <div class="text-center">
        <img 
          src="@/assets/image/mainlogo.png"
          class="logo-img"
          style="height: 30%; width: 50%;"
        />
      </div>

      <ul class="nav justify-content-center bg-light">
        <!-- 홈화면 -->
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name :'MainPageHome'}" 
          > HOME </router-link> 
        </li>
        
        <!-- 망링레 소개 -->
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'IntroMangLingLe'}"
          > ABOUT MANGLINGLE </router-link>
        </li>

        <!-- 쇼핑리스트 -->
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'ShoppingAll'}" 
          > GOODS </router-link>
        </li> 
      </ul>
    </header>
  </div>
</template>
  
<script>
export default{

}
</script>
  
<style scoped>
/* .titleC{
  hight:100px;
} */
 
</style>
  