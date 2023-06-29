<template>
  <div class = "navbar">
    <header style="backgroundColor:#FFD89C">
      <ul class="nav justify-content-end bg-light">
        <!-- 로그인 화면 -->
        <li class="nav-item cur">
          <router-link 
            class="nav-link active"
            :to="{ name : 'LoginMember'}" 
          > LOGIN </router-link>
        </li>

        <!-- 회원가입 화면 -->
        <li class="nav-item cur">
          <router-link 
            class="nav-link active"
            :to="{ name : 'JoinMember'}" 
          > JOIN </router-link>
        </li>

        <!-- 쇼핑카트 -->
        <li class="nav-item cur">
          <router-link 
            class="nav-link active"
            :to="{ name : 'ShoppingCartList'}" 
          > CART </router-link>
        </li>
      </ul>

      <!-- 메인 로고 -->
      <ul class="text-center">
        <!-- 망고 -->
        <img 
          src="@/assets/image/mango.png"
          class="logo-img"
          style="height: 2.5%; width: 2.5%;"
        />
        <!-- 링고 -->
        <img 
          src="@/assets/image/lingo.png"
          class="logo-img"
          style="height: 2.5%; width: 2.5%;"
        />
        <!-- 레고 -->
        <img 
          src="@/assets/image/lego.png"
          class="logo-img"
          style="height: 3%; width: 3%;"
        />

        <!-- 망링레마켓 로고 -->
        <router-link :to="{ name : 'MainPageHome'}" >
        <img 
          src="@/assets/image/logo.png"
          class="logo-img"
          style="height: 40%; width: 40%; margin-top:9px; margin-bottom:-10px; 
                 cursor:pointer; background-color: none;"
        />
      </router-link>

        <!-- 망고 -->
        <img 
          src="@/assets/image/mango.png"
          class="logo-img"
          style="height: 2.5%; width: 2.5%;"
        />
        <!-- 링고 -->
        <img 
          src="@/assets/image/lingo.png"
          class="logo-img"
          style="height: 2.5%; width: 2.5%;"
        />
        <!-- 레고 -->
        <img 
          src="@/assets/image/lego.png"
          class="logo-img"
          style="height: 3%; width: 3%;"
        />
      </ul>

      <ul class="nav justify-content-center bg-light">
        <!-- 홈화면 -->
        <li class="nav-item cur">
          <router-link 
            class="nav-link active"
            :to="{ name :'MainPageHome'}" 
          > HOME </router-link> 
          
        </li>
        
        <!-- 망링레 소개 -->
        <li class="nav-item cur">
          <router-link 
            class="nav-link active"
            :to="{ name : 'IntroMangLingLe'}"
          > ABOUT MANGLINGLE </router-link>
        </li>

        <!-- 쇼핑리스트 -->
        <li class="nav-item cur">
          <router-link 
            class="nav-link active"
            :to="{ name : 'ShoppingAll'}" 
          > GOODS </router-link>
        </li> 
      </ul>
      <hr style="height:1%;color:#FFD89C"/>
    </header>
  </div>
</template>
  
<script>
export default {
  name: 'MainPageHeader',
  data() {
    return {



    };
  },

  methods: {

    /* 망링레마켓 로고 클릭시 메인페이지로 이동 */ 




    


  },
  // ...
}
</script>
  
<style scoped>

.cur {
  text-decoration:none; 
  color: #EA906C;
  cursor: pointer;
} 

.cur:focus {
  text-decoration: none;
  color: #EA906C;
  background: transparent;
  background-color: #d6c39c;
}

/* a:hover {
  text-decoration: none;
  color: #EA906C;
  background-color: #d6c39c;
}*/

</style>
  