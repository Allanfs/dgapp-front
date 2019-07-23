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
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
