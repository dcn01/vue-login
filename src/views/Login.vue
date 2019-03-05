<template>
  <div class="login">
    <el-form>
      <el-form-item>
        <el-input type="text" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>
<style scoped lang="less">
.login{
  width:100%;
  height:100%;
  background-color: #f0f0f0;
}
</style>
 