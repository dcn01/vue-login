<template>
  <el-row class="header-box">
    <el-col :span="20">
      <h1>XX后台管理系统</h1>
    </el-col>
    <el-col :span="4">
      <el-dropdown :hide-on-click="true" @command="handleOutLogin">
        <span class="el-dropdown-link">
          <span>{{userName}}</span><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided command="a">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "headBox",
  computed:{
    userName(){
      return window.localStorage.userName?window.localStorage.userName:"未登录"
    }
  },
  methods:{
    handleOutLogin(command){
      if(command == "a"){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("userName");
        this.$router.push("/login")
      }
      
    }
  }
};
</script>

<style scoped lang="less">
.header-box {
  height: 100%;
  .el-col-20 {
    display: flex;
    align-items: center;
    text-align: left;
    h1 {
      font-size: 24px;
      margin-left: 20px;
      color: #fff;
    }
  }
  .el-col-4 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
}
</style>