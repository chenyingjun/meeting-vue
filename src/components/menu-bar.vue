<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      class="common-background el-menu-demo"
      @select="handleSelect"
      text-color="#fff"
      background-color="#545c64"
      active-text-color="#ffd04b">
      <el-menu-item index="nav">处理中心</el-menu-item>
      <el-submenu index="">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      console.log(keyPath)
      this.$router.push({name: key})
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
