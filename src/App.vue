<template>
  <div id="app">
    <img src="~assets/img/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "~assets/lib/css/animations.css";

  *{margin:0;padding:0;}
  html,body{margin:0; padding:0; height:100%;}
  a{text-decoration: none;}
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    text-align: center;
    font-size: 16px;
  }
</style>
