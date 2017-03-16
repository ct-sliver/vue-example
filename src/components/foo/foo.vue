<script src="./foo.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./foo.less" lang="less" scoped></style>

<template>
  <div class="hello">
    我擦
    <router-link to="/">{{ list }}</router-link>
    <button type="button" @click="haha">{{ list }}</button>
  </div>
</template>
