<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="transparent"
    text-color="#fff"
    active-text-color="#409EFF"
  >
    <el-menu-item index="1">
      <router-link to="/home" tag="li">
        <i class="el-icon-location"></i>
        <span>主页</span>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
       <router-link to="/about">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
       </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "asideNav"
};
</script>

<style scoped lang="less">
.el-menu{
  border-right:none;
}
</style>