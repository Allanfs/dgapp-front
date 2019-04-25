<template>
    <v-form>
        <v-layout  wrap >
            <v-flex xs12 sm2 md1>
                <v-text-field v-model="telefone.ddd" type="number"  label="DDD"></v-text-field>
            </v-flex>
            <v-flex xs12 sm5 md3>
                <v-text-field v-model="telefone.numero" label="Número*" mask="#####-####" required></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                 <v-checkbox v-model="telefone.whatsapp" label="É Whatsapp"></v-checkbox>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm5 md4>
                <v-text-field v-model="telefone.observacao" label="Observação"></v-text-field>
            </v-flex>
        </v-layout>
    </v-form>
</template>
<script>
export default {
    data () {
        return {
            telefone: {
                ddd: '83',
                numero: '',
                whatsapp: false,
                observacao: ''
            }
        }
    }
}
</script>

