import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

//uview 2.0组件库
// main.js，注意要在use方法之后执行
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// 此处为引用自定义顶部
import cuCustom from './components/cu-custom.vue'
Vue.component('cu-custom',cuCustom);
// 注册全局组件
import HeaderNav from "@/components/HeaderNav"
Vue.component("HeaderNav", HeaderNav)
//挂载tabbar组件于全局
import Tabbar from '@/components/tabbar/tabbar.vue'
Vue.component('view-tabbar', Tabbar)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif