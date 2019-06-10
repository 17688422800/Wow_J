<template>
  <div>
      <div class="mianbao">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in info" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    };
  },
  watch: {
    $route() {
      this.getRoute();
    }
  },
  methods: {
    getRoute() {
      // 获取matched的每一项的meta信息
      const arr = this.$route.matched;
      var info = [];
      arr.forEach(v => {
        info.push(v.meta);
      });
      this.info = info;
    }
  },
  mounted() {
    this.getRoute();
  }
};
</script>

<style>
.mianbao {
  padding-bottom: 15px;
  border-bottom: 1px #ddd solid;
}
</style>
