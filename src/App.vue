<template>
  <div id="app">
    
    <p>
      I possibili link sono
      <ul>
        <li><router-link to="/foo">Go to Foo</router-link></li>
        <li><router-link to="/bar">Go to Bar</router-link></li>
        <li><router-link to="/hello">Go to Hello</router-link></li>
        <li><router-link to="/post">Go to Post</router-link></li>
        <li>post</li>
      </ul>
    </p>
    <router-view></router-view>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app'
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
ul {
  list-style: none;
}
</style>
