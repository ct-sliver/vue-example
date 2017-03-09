<template>
  <div class="hello">
    我擦
    <router-link to="/">{{ list }}</router-link>
    <button type="button" @click="haha">{{ list }}</button>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        list:'wo cah'
      }
    },

    mounted() {
      this.getBanner();
    },

    methods: {
      //请求别人家的api获取列表 /api/xxxx 会被proxy，绕过跨域
      getBanner() {
        console.log('哈哈');
      },
      haha(){
        alert('哈哈');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
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
  body{
    a{
      color: #1c8de0;
      transition: 0.5s;
      &:hover{color: #9b59b6;}
    }
  }

</style>
