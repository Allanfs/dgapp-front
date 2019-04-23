import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
