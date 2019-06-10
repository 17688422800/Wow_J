<template>
    <el-container>
      <el-aside width="auto">
        <Menu :isShow='adminIsShow'/>
      </el-aside>
      <el-container>
        <el-header>
          <Header @click="handleChangeShow"/>
        </el-header>
        <el-main>
          <Mianbao/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Header from '../components/Header.vue';
import Mianbao from '../components/Mianbao.vue';
import Menu from '../components/Menu.vue'
export default {
    data(){
      return{
        adminIsShow:false,
      }
    },
    methods: {
      handleChangeShow(){
        this.adminIsShow = !this.adminIsShow
      }
  },
    components:{
        Header,
        Mianbao,
        Menu
    }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: rgb(45, 91, 150);
  color: rgb(172, 166, 134);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(118, 112, 173);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > div > .el-container {
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
