<template>
  <div id="app">
    index
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // 钩子函数
  mounted(){
    // 获取请求
    this.$axios({
      url:'https://api.github.com/users',
      // get请求参数
      method:'GET',
      // .then就相当于success
    }).then(res => {
      console.log(res); // 从url页面获取的所有参数
      console.log(res.config.params);// 对象{abc: 123}
    })
  }
}
</script>

<style>

</style>
