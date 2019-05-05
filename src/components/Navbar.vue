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

    <v-navigation-drawer app v-model="drawer" class="info">

      <v-list dense v-for="item in itens" :key="item">

        <v-list-group>

          <template slot="activator">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">{{item.titulo}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile v-for="subitem in item.subitens" :key="subitem" router :to="subitem.route">
            
            <v-list-tile-action>
              <v-icon class="white--text">{{subitem.icon}}</v-icon>
            </v-list-tile-action>
            
            <v-list-tile-content>
              <v-list-tile-title color="red" class="white--text">
                {{subitem.text}}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>

  </nav>
</template>

<script>
import { itens } from './navbarItens.js'
export default {
  data() {
    return {
      itens: itens,
      drawer: true
    }
  }
}
</script>

<style>

</style>
