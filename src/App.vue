<template>
  <v-app>
    <!-- barra superior -->
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Dom Gilittu's</v-toolbar-title>
    </v-toolbar>
    <!-- TODO sidebar -->
    
    <!-- conteudo exibido -->
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>
</style>
