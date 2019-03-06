<template>
  <div class="login">
    <el-form>
      <el-form-item>
        <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="loginTo">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    loginTo(){
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped lang="less">
.login{
  width:100%;
  height:100%;
  background-color: #f0f0f0;
  display:flex;
  justify-content: center;
  align-items: center;

  .el-form{
    padding:20px;
    width:300px;
    height:auto;
    margin:0 auto;
    background-color: #e0e0e0;
    box-shadow: 0 0 2px #a0a0a0;
    margin-top:-100px;
  }
}
</style>
 