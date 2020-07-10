import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import "./style/index.css"
Vue.prototype.$echarts = Echarts
Vue.config.productionTip = false
Vue.component('vue-echarts',VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
