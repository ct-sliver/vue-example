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
