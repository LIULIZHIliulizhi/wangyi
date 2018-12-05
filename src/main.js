import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'
import Border from './components/Border/Border.vue'
import './mock/mockSever'
import loading from './assets/images/loading.gif'
Vue.use(VueLazyload, { // 内部定义了一个全局指令lazy
  loading,
})
//关闭vue的提示
Vue.config.productionTip = false
/* eslint-disable no-new */
//注册全局路由
Vue.component('Border',Border)
new Vue({
  el: '#app',
  render: h=> h(App),
  router,
  store
})
