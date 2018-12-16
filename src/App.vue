<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import VueRouter from "vue-router";

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.btn {
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  margin: 1rem 0;
  cursor: pointer;
  min-width: 80%;
  font-size: 0.7rem;
}
.btn-success {
  background-color: #00e086;
  color: #000000;
}
.btn-primary {
  background-color: #FFAA40;
  color: #000000;
}
</style>
