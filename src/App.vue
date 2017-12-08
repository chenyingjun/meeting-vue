<template>
  <div id="app">
    <menu-bar></menu-bar>
    <router-view class="child-container"/>
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
.child-container {
  min-height: 680px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1200px) {
  .container, .child-container {
    width: 1170px;
  }
}
@media (max-width: 1199px) {
  .container, .child-container {
    width: 970px;
  }
}
@media (max-width: 991px) {
  .container, .child-container {
    width: 750px;
  }
}
</style>
