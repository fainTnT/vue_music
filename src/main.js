import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'// 解决移动端300ms延迟
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body) 

Vue.use(VueLazyLoad,{
	loading: require('common/image/default.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
