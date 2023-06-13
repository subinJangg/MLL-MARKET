<template>
  <!-- <PageHeader/> 헤더 컴포넌트 -->
  <!-- <router-view/>  페이지 이동이 표시될 곳 -->
  <!-- <PageFooter/> 푸터 컴포넌트 -->
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
</style>
