import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css
import '@/styles/public.scss' // public css
// 字体自适应库
import flexible from './utils/flexible.js'
flexible()
import App from './App'
import store from './store/index.js'
// import store from './store/store.js';
import router from './router'
import './icons'
import './permission'
import './utils/error-log'

import * as filters from './filters'
import axios from 'axios'
// import './utils/axios.js'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import GlobalTools from './plugins/globalTools'
Vue.prototype.$axios = axios
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'success', offset: 90 })
}

Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'error', offset: 90 })
}
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
const on = Vue.prototype.$on
// 防抖处理
Vue.prototype.$on = function(event, func) {
  let timer
  let newFunc = func
  if (event === 'click') {
    newFunc = function() {
      clearTimeout(timer)
      timer = setTimeout(function() {
        func.apply(this, arguments)
      }, 500)
    }
  }
  on.call(this, event, newFunc)
}
// 节流
Vue.prototype.$on = function(event, func) {
  let previous = 0
  let newFunc = func
  if (event === 'click') {
    newFunc = function() {
      const now = new Date().getTime()
      if (previous + 1000 <= now) {
        func.apply(this, arguments)
        previous = now
      }
    }
  }
  on.call(this, event, newFunc)
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

Vue.use(GlobalTools, router)
Vue.prototype.getConfigJson = function() {
  Vue.prototype.$axios
    .get('serverConfig.json')
    .then(result => {
      Vue.prototype.baseUrl = result.data.baseUrl // 设置成Vue的全局属性
      Vue.prototype.imgUrl = result.data.imgUrl // 设置成Vue的全局属性
      Vue.prototype.videoUrl = result.data.videoUrl // 设置成Vue的全局属性
      new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
      })
    })
    .catch(error => {
      console.log(error)
    })
}

Vue.prototype.getConfigJson() // 调用声明的全局方法
