<template>
    <v-form class="px-3">
        <v-text-field v-model="sabor.nome" label="Nome"></v-text-field>
        <v-text-field v-model="sabor.preco" type="number" label="Preço de Venda"></v-text-field>
        <v-checkbox v-model="sabor.especial" label="Especial"></v-checkbox>

        <!-- aqui deve haver um v-for para exibir os recheios cadastrados -->
        <v-card flat>
            <v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4>
                            <h4>Salgado</h4>
                            <v-checkbox v-model="recheiosSelecionados" label="Molho" value="Molho"></v-checkbox>
                            <v-checkbox v-model="recheiosSelecionados" label="Mussarela" value="Mussarela"></v-checkbox>
                            <v-checkbox v-model="recheiosSelecionados" label="Presunto" value="Presunto"></v-checkbox>
                        </v-flex>

                        <v-flex xs12 sm6 md4>
                            <h4>Especial</h4>
                            <v-checkbox v-model="recheiosSelecionados" label="Camarão Olho e Óleo" value="Camarão Olho e Oleo"></v-checkbox>
                            <v-checkbox v-model="recheiosSelecionados" label="Camarão Empanado" value="Camarão Empanado"></v-checkbox>
                            <v-checkbox v-model="recheiosSelecionados" label="Camarão Cozido" value="Camarão Cozido"></v-checkbox>
                        </v-flex>

                        <v-flex xs12 sm6 md4>
                            <h4>Doce</h4>
                            <v-checkbox v-model="recheiosSelecionados" label="Chocolate Cremoso" value="Chocolate Cremoso"></v-checkbox>
                            <v-checkbox v-model="recheiosSelecionados" label="Chocolate Ralado" value="Chocolate Ralado"></v-checkbox>
                            <v-checkbox v-model="recheiosSelecionados" label="Chocolate Branco" value="Chocolate Branco"></v-checkbox>
                        </v-flex>
                        
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-form>
</template>
<script>
export default {
    name: 'form-sabor',
    data () {
        return {
            sabor: {
                nome: '',
                preco: '',
                especial: true
            },
            recheiosSelecionados: []
        }
    }
}
</script>

