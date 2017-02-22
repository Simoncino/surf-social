<template>
  <div id="app">
    
    <p>
      I possibili link sono
      <ul>
        <li>foo</li>
        <li>bar</li>
        <li>hello</li>
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
</style>
