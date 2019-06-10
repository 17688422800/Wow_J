<template>
  <div class="denglu">
    <el-form ref="form" :rules="rules" label-width='100px' :model="form">
      <el-form-item label="账号" prop='username'>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='password'>
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-row>
        <el-button type="success" icon="el-icon-check" @click="onSubmit('form')" circle></el-button>
        <el-button type="danger" icon="el-icon-close" circle></el-button>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    onSubmit(formName) {
        // validate 验证是否执行
         this.$refs[formName].validate((valid) => {
             // 判断valid是true还是false
          if (valid) {
            //   如果为true，就获取数据
             var data = {
                    uname: this.form.username,
                    upwd: this.form.password 
                }
            this.$axios({
                url:'http://localhost:8899/admin/account/login',
                method:'POST',
                data,
                withCredentials: true
            }).then( res => {
                var {message, status} = res.data
                // 登陆成功
                if(status === 0){
                    // 页面跳转到主页
                    this.$router.push('/')
                }
                if(status === 1){
                    // 弹出错误信息
                    this.$message.error(message);
                }
            })
          } else {
            //   console.log(valid);
            // console.log('error submit!!');
            return false;
          }
        });
    },
  },
};
</script>
<style>
form {
  width: 500px;
  height: 166px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -83px;
}

.el-form-item__label {
  font-size: 20px;
}
.denglu .el-row {
  padding-left: 100px;
}
</style>