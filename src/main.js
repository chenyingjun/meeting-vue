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
    if (response.status === 200) {
      if (response.data.code === 200) {
        console.log(response.data.data)
        callback(response.data.data)
      } else if (response.data.code === 400) {
        console.log(response.data.message)
      } else {
        console.log(response.data.message)
      }
    } else {
      // console.log("请求失败")
    }
  }).catch((error) => {
    console.log(error)
  })
}
