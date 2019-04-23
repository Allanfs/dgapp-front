<template>
  <nav>

    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer" ></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Dom</span>
        <span>Gilittu's</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span>Sair</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <p>test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style>

</style>
