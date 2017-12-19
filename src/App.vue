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
        <foot-bar></foot-bar>
    </el-container>
  </div>
</template>

<script>
import menuBar from '@/components/menu-bar'
import footBar from '@/components/foot-bar'
export default {
  name: 'app',
  data () {
    return {
      asideWidth: '201px'
    }
  },
  components: {
    menuBar,
    footBar
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

.el-header {
  padding: 0px;
}

#app {
  display: flex;
  height: 100%;
}

html,body{
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
