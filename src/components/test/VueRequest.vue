<template>
  <div class="users">
    <h1>111</h1>
    <li v-for="cate in categoryList" v-bind:key="cate">{{cate.username}}</li>
    <li v-for="cate in categoryList" v-bind:key="cate">{{cate.password}}</li>
  </div>

</template>

<script>
export default {
  name: 'VueRequest',
  created () {
    this.ReqTest()
  },
  data () {
    return {
      categoryList: []
    }
  },
  methods: {
    ReqTest: function () {
      this.$axios.get(this.global.host + '/user/test').then(res => {
        this.categoryList = res
      })
    }
  }
}

</script>

<style scoped>

</style>
