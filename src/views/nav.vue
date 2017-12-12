<template>
  <el-container>
    <el-aside :width="asideWidth">
      <nav-bar @change="changeStatus"></nav-bar>
    </el-aside>
    <el-main>
      <router-view class="child-container"/>
    </el-main>
  </el-container>
</template>

<script>
import navBar from '@/components/nav-bar'
export default {
  name: 'nav',
  data () {
    return {
      asideWidth: '201px'
    }
  },
  components: {
    navBar
  },
  methods: {
    changeStatus (status) {
      this.asideWidth = status ? '65px' : '201px'
    }
  }
}
</script>

<style>
  .child-container {
    min-height: 680px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
