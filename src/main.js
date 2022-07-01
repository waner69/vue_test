import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  // 残缺版的vue不能使用template，用render返回
  render: h => h(App),
});