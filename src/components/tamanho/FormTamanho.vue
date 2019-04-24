<template>
    <v-form class="px-3">
        <v-text-field v-model="tamanho.nome" label="Nome"></v-text-field>
        <v-text-field v-model="tamanho.preco" type="number" label="Preço de Venda"></v-text-field>
        <v-checkbox v-model="tamanho.disponivel" label="Disponivel"></v-checkbox>

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

