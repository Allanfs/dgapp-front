import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  /* 
  utilizar a propriedade template
  mudará o modo de build do vue
  existem 2: standalon e runtime-only
  */
  router,
  render: h => h(App)
}).$mount('#app')
