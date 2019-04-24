<template>
    <v-form class="px-3">
        <v-container fluid>
        <v-text-field v-model="tamanho.nome" label="Nome"></v-text-field>
            <v-layout row wrap>

                <v-flex xs12 sm3>
                    <v-text-field v-model="tamanho.centimetros"  label="Centiímetros" suffix="cm"></v-text-field>
                </v-flex>

                <v-flex xs12 sm3>
                    <v-text-field v-model="tamanho.fatias" type="number" label="Número de Fatias" suffix="fatias"></v-text-field>
                </v-flex>
                
            </v-layout>
        
        <v-text-field v-model="tamanho.preco" type="number" label="Preço de Venda" prefix="$"></v-text-field>
        <v-checkbox v-model="tamanho.disponivel" label="Disponivel"></v-checkbox>

        </v-container>
    </v-form>
</template>
<script>
export default {
    name: 'form-tamanho',
    data () {
        return {
            tamanho: {
                nome: '',
                preco: '',
                disponivel: true
            }
        }
    }
}
</script>

