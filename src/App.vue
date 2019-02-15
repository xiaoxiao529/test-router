<template>
  <div id="app" class="container">
    <div class="btn-group">
      <router-link class="btn" exact to='/'>home</router-link>
      <router-link class="btn" to='/about'>about</router-link>
      <router-link class="btn" :to='{path:"/document"}'>document</router-link>
      <router-link class="btn" to='/user'>user</router-link>
    </div>
    <router-view name="slide"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  //:class="{'router-link-active':$router.path=='/index'}"
  name: 'App',
  data(){
    return{
      home:'/home'  //
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
