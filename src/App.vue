<template>
  <div>
    <div class="navbar-brand">
      <MainPageHeader/>
    </div>
    <div style="min-height:450px"> 
      <router-view/>
    </div>
    <div style="height:150px;backgroundColor:#FFD89C">
      <MainPageFooter/>
    </div>
  </div> 
</template>

<script>
import MainPageHeader from '@/components/main/MainPageHeader';
import MainPageFooter from '@/components/main/MainPageFooter';

export default{
    name : 'App',
    components : {
      MainPageHeader,
      MainPageFooter,
    }
  }
</script>

<style>
@font-face {
    font-family: 'SDSamliphopangche_Basic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Basic.woff') format('woff'); /* 폰트 경로*/
    font-weight: normal; /* 폰트의 두께 */
    font-style: normal; /* 폰트의 스타일 */
}

#app {
  font-family: 'SDSamliphopangche_Basic';
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* margin-top: 60px; */
}



/* #nav {
  padding: 30px;
}

#test {
  padding: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
