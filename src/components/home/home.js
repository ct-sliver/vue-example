export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Apps',
      user : this.$config.user()
    }
  }
}
