// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../theme/index.css'
import './common/common.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
window.getApi = (url, params, callback) => {
  return axios.get(url, {
    params: params
  }).then((response) => {
    callback(response.data)
  }).catch((error) => {
    console.log(error)
  })
}
