<template>
  <div id="app">
    <el-container>
      <el-header>
        <menu-bar></menu-bar>
      </el-header>
      <el-container>
        <el-aside>
          <nav-bar></nav-bar>
        </el-aside>
        <el-main>
          <router-view class="child-container"/>

        </el-main>

      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import menuBar from '@/components/menu-bar'
import navBar from '@/components/nav-bar'
export default {
  name: 'app',
  components: {
    menuBar,
    navBar
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
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  padding: 0px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
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

.child-container {
  min-height: 680px;
  margin-left: auto;
  margin-right: auto;
}
</style>
