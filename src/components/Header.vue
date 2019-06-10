<template>
  <div>
    <el-row type='flex' justify="space-between">
      <div class="arrow" @click="handleClick">
        <i class="el-icon-back"></i>
      </div>
      <div>admin 超级管理员 退出</div>
    </el-row>
  </div>
</template>

<script>

export default {
  methods: {
    handleClick(){
      // 去触发Admin组件身上的click事件，触发这个事件之后，就执行click
      // 对应的函数
      this.$emit('click')
    }
  },
}
</script>

<style>
  .arrow{
    cursor:pointer;
}
</style>