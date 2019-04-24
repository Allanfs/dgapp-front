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

      <v-list dense>

        <v-list-group>
          <!-- cabeçalho da seção -->
          <template slot="activator">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">Cadastrar</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          
          <v-list-tile  v-for="link in links" :key="link.text" router :to="link.route">
            
            <!-- icone -->
            <v-list-tile-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-tile-action>
            
            <!-- texto -->
            <v-list-tile-content>
              <v-list-tile-title color="red" class="white--text">
                {{link.text}}
              </v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>

        </v-list-group>
        
      </v-list>
      
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: 'dashboard', text: 'Categoria', route: '/adicionar/categoria'},
        { icon: 'person', text: 'Cliente', route: '/adicionar/cliente'},
        { icon: 'add_location', text: 'Endereco', route: '/adicionar/endereco'},
        { icon: 'playlist_add', text: 'Pedido', route: '/adicionar/pedido'},
        { icon: 'local_pizza', text: 'Pizza', route: '/adicionar/pizza'},
        { icon: 'fastfood', text: 'Produto', route: '/adicionar/produto'},
        { icon: 'local_play', text: 'Promocao', route: '/adicionar/promocao'},
        { icon: 'local_dining', text: 'Recheio', route: '/adicionar/recheio'},
        { icon: 'restaurant', text: 'Sabor', route: '/adicionar/sabor'},
        { icon: 'hdr_strong', text: 'Tamanho', route: '/adicionar/tamanho'},
        { icon: 'phone', text: 'Telefone', route: '/adicionar/telefone'}
      ]
    }
  }
}
</script>

<style>

</style>
