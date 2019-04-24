<template>
    <v-form class="px-3">

        <v-layout row wrap >
            <v-flex xs12 sm8>
                <v-text-field v-model="endereco.logradouro" label="Rua"></v-text-field>

            </v-flex>
            <v-flex xs12 sm2>
                <v-text-field v-model="endereco.numero" label="Número"></v-text-field>

            </v-flex>

            <v-flex xs12 sm2>
                <v-text-field v-model="endereco.bairro" label="Bairro" value=""></v-text-field>

            </v-flex>
        </v-layout>
        <v-text-field v-model="endereco.complemento" label="Complemento"></v-text-field>
        <v-text-field v-model="endereco.referencia" label="Referência"></v-text-field>

    </v-form>
</template>
<script>
export default {
    name: 'form-endereco',
    data () {
        return {
            endereco: {
                logradouro: '',
                bairro: 'Centro',
                numero: '',
                complemento: '',
            }
        }
    }
}
</script>

