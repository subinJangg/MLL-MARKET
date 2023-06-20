<template>
  <div class="container-fluid">
    <div class="navbar-brand" style="height:200px;backgroundColor:#FFD89C">
      <MainPageHeader/>
    </div>
    <div style="width: 100%; height:500px"> 
      <router-view/>
    </div>
    <div style="height:150px;backgroundColor:#FFD89C">
      <MainPageFooter/>
    </div>
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
