<template>
  <div class="users">
    <h1>111</h1>
    <li v-for="cate in categoryList.data" v-bind:key="cate">用户名：{{cate.username}}密码：{{cate.password}}</li>
  </div>
</template>

<script>
export default {
  name: 'VueRequest',
  created () {
    console.log('create function run')
    this.ReqTest()
  },
  data () {
    return {
      categoryList: []
    }
  },
  methods: {
    ReqTest: function () {
      this.$axios.get('/api/user/test').then(res => {
        this.categoryList = res
        console.log(this.categoryList)
      })
    }
  }
}

</script>

<style scoped>

</style>
