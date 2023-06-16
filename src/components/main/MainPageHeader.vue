<template>
  <div>
    <header>
      <div class="text-center titleC">
        <h4>제목</h4>
      </div>
      <ul class="nav justify-content-center bg-light">
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name :'MainPageHome'}" 
          > 
            home 
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'IntroMangLingLe'}"
          > introduce </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'ShoppingAll'}" 
          > shopping </router-link>
        </li> 
      </ul>

      <ul class="nav justify-content-end bg-light">
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'LoginMember'}" 
          > login </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link active"
            :to="{ name : 'JoinMember'}" 
          > join us </router-link>
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
.titleC{
  hight:100px;
}
 
</style>
  