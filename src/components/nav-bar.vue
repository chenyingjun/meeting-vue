<template>
  <div>
    <!--<el-radio-group v-model="isCollapse">
      &lt;!&ndash;<el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>&ndash;&gt;
      <el-button @click="changeNav" :style="navMenuPadding">
        <i class="el-icon-menu"></i>
      </el-button>
    </el-radio-group>-->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
             @open="handleOpen" @close="handleClose"
             active-text-color="#ffd04b"
             :collapse="isCollapse" @select="handleSelect">
      <el-submenu index="nav1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="nav1-demo1">选项1</el-menu-item>
          <el-menu-item index="nav1-demo2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="nav1-demo3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="nav2">
        <i class="el-icon-bell"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-submenu index="mt">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">会议管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="mt-meeting">会议</el-menu-item>
          <el-menu-item index="mt-meetingroom">会议室</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      navMenuPadding: 'padding:4px 24px;border-radius: 0px;'
    }
  },
  watch: {
    isCollapse (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      this.$router.push({name: key})
    },
    changeNav () {
//      this.isCollapse = this.isCollapse ? false : true
      this.navMenuPadding = this.isCollapse ? 'padding:4px 24px;border-radius: 0px;' : 'padding:4px 92px;border-radius: 0px;'
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
