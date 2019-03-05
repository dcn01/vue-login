<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="transparent"
    text-color="#fff"
    active-text-color="#409EFF"
  >
    <el-menu-item index="1">
      <router-link to="/home" tag="div">
        <i class="el-icon-location"></i>
        <span>主页</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/about" tag="div">
        <i class="el-icon-menu"></i>
        <span>关于</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="setting" tag="div">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "asideNav"
};
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
</style>