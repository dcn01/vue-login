<template>
  <div id="app">
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

  </div>
</template>
<script>
import AsideNav from "./views/AsideNav";
import HeadBox from "./views/HeadBox";
export default {
  components: {
    AsideNav,
    HeadBox
  }
};
</script>
<style lang="less">
html,body{
  width:100%;
  height:100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  >section{
    height:100%;
  }
  .el-header {
    background-color: #230455;
  }
  .el-aside {
    background-color: #230455;
  }
  .el-main {
    background-color: #f0f0f0;
  }
}
</style>
