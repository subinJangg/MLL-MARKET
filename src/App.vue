<template>
  <div class="container">
    <div class="navbar-brand">
    <MainPageHeader/>
    </div>
    <div class="container body">
    <router-vue/>
  </div>
    <MainPageFooter/>
  </div> 
</template>

<script>
import MainPageHeader from '@/components/main/MainPageHeader'
import MainPageFooter from '@/components/main/MainPageFooter'

export default{
    name : 'App',
    components : {
      MainPageHeader,
      MainPageFooter,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
