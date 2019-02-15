<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="btn-group">
      <router-link class="btn" exact :to='{name:"Hobby"}'>hobby</router-link>
      <router-link class="btn" to='/about/study'>study</router-link>
      <router-link class="btn" :to='{path:"/about/work"}'>work</router-link>
    </div>
    <router-view name="hobby1"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '关于我'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
