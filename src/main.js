import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.config.productionTip = false

/* 
utilizar a propriedade template
mudará o modo de build do vue
existem 2: standalon e runtime-only
*/
const app = new Vue({
  el: '#app',
  store,
  router,
  render: function (h) {
    return h(App)
  } 
})//.$mount()

Vue.component('adicionar-cliente-novo', {
  render (createElement) {
    return createElement('span','ol')
  }
}) 