import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem基准值适配
import 'amfe-flexible/index.min.js'

// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 注册vant组件库，一次性把全部的应用组件都注册好，插件机制
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
