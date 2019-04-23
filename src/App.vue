<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Dom Gilittu's</v-toolbar-title>
    </v-toolbar>
  
    
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    'navigation': Navigation
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>
</style>
