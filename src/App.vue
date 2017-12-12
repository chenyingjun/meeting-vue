<template>
  <div id="app">
    <el-container>
      <el-header>
        <menu-bar></menu-bar>
      </el-header>
      <el-container>
        <router-view />
        <!--<el-aside :width="asideWidth">
          <nav-bar @change="changeStatus"></nav-bar>
        </el-aside>
        <el-main>
          <router-view class="child-container"/>
        </el-main>-->
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import menuBar from '@/components/menu-bar'
export default {
  name: 'app',
  data () {
    return {
      asideWidth: '201px'
    }
  },
  components: {
    menuBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0px;
  word-break: break-all;
}

.el-header, .el-footer {
  background-color: #D3DCE6;
  text-align: center;
  padding: 0px;
}
.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
