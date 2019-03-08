<template>
  <div class="login">
    <el-form>
      <h1>xx系统登录</h1>
      <el-form-item>
        <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="loginTo">登录</el-button>
      </el-form-item>
      <span>用户名：zxc 密码：123456</span>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted(){
    window.addEventListener("keyup",this.enterLoginTo)
  },
  methods: {
    loginTo() {
      if (
        this.username &&
        this.username == "zxc" &&
        this.password &&
        this.password == "123456"
      ) {
        axios
          .post("http://rap2api.taobao.org/app/mock/161454/login", {
            user_name: this.username,
            password: this.password
          })
          .then(data => {
            if(data.data.code=="200"){
              window.localStorage.setItem("userName",data.data.name);
              window.localStorage.setItem("token",data.data.token);
              if(this.$route.query.redirect){
                this.$router.push(this.$route.query.redirect);
                return;
              }
              this.$router.push("/home");
            }
          });
      }else{
        axios
          .post("http://rap2api.taobao.org/app/mock/161454/login_error", {
            user_name: this.username,
            password: this.password
          })
          .then(data => {
            alert("用户名或密码错误");
            this.username = '';
            this.password = '';
          });
      }
    },
    enterLoginTo(e){
      if(e.keyCode == "13"){
        this.loginTo()
      }
    }
  },
  beforeDestroy(){
    window.removeEventListener("keyup",this.enterLoginTo);
  }
};
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
  .el-form {
    padding: 20px;
    width: 300px;
    height: auto;
    margin: 0 auto;
    background-color: rgba(220, 220, 220, 0.95);
    box-shadow: 0 0 2px #a0a0a0;
    margin-top: -100px;
    border-radius: 4px;
  }
}
</style>
 