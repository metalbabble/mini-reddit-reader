import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-vue/dist/bootstrap-vue.css');

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')

