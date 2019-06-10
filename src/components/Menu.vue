<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(118, 112, 173)"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isShow"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>个人宝贝</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <template slot="title">
                <router-link to="/admin/goods-list">
                商品管理
                </router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="1-2">
              <template slot="title">
                <router-link to="/admin/category-list">
                栏目管理
                </router-link>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // 接收isShow
  props: ["isShow"],
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: none;
}
.el-col-12 {
  width: 100%;
}
.el-container .el-aside {
  text-align: left;
}
.el-menu-item a {
    color:inherit;
    text-decoration:none;
}
</style>
