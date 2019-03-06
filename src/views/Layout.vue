<template>
  <el-container>
      <el-header>
        <HeadBox />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideNav />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import HeadBox from './HeadBox';
import AsideNav from './AsideNav';
export default {
  name: "layout",
  components:{
    HeadBox,
    AsideNav
  }
};
</script>
<style scoped lang="less">
.el-header {
    background-color: #230455;
  }
  .el-aside {
    background-color: #230455;
  }
  .el-main {
    background-color: #f0f0f0;
  }
</style>
 