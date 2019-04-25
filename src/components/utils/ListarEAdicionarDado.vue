<template>
    <div>
        <!-- botão para adicionar -->
        <v-card  flat class="pa-3">
            <v-layout>
                <v-flex>
                    <v-btn block flat class="info" @click="adicionar">
                        <v-icon right small>add</v-icon>
                        Adicionar
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>

        <!-- listagem -->
        <v-card flat class="pa-3" v-for="(content, idx) in contents" :key="idx">
            <v-layout row wrap @click="click"  >
                <v-flex xs12 md2 v-for="exibido in exibidos">
                    <div class="caption grey--text">{{exibido.label}}</div>
                    <div>{{ content[ exibido.campo ] }}</div>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
        </v-card>
    </div>
</template>
<script>
export default {
    // props: {
    //     captions: {
    //         type: Array
    //     },
    //     contents: {
    //         type: Array
    //     }
    // },
    data () {
        return {
            contents: [
                {endereco: 'Rua tal', numero: '50', complemento: 'casa'},
                {endereco: 'Rua dos bolos', numero: '0', complemento: 'sem teto'}
            ],
            exibidos: [{
                campo: 'endereco',
                label: 'Endereço'
                },
                {
                campo: 'numero',
                label: 'Número'
                },
                {
                campo: 'complemento',
                label: 'Complemento'
                }
            ],
        }
    }
}
</script>
