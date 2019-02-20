// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

import Test from './components/Test'


Vue.config.productionTip = false
// 注册使用
Vue.use(ElementUI)	

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
