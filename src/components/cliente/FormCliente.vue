<template>
    <v-form>
        <v-layout>
            <v-flex xs12 sm6>
                <v-text-field v-model="cliente.nome" label="Nome"></v-text-field>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
            <v-flex xs12 sm2>
                <v-text-field v-model="cliente.cpf" label="CPF" mask="###.###.###-##"></v-text-field>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
            <v-flex xs12 sm2>
                <v-text-field v-model="cliente.nascimento" type="date" label="Data Nascimento"></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 sm2>
                <v-text-field v-model="cliente.instagram" label="Instagram" prefix="@"></v-text-field>

            </v-flex>
            <v-flex xs12 sm2>
                <v-text-field v-model="cliente.facebook" label="Facebook" prefix="/"></v-text-field>

            </v-flex>
        </v-layout>
        <v-card flat class="pa-3">
            <v-layout row wrap @click="click">
                <v-flex xs12 md6>
                    <div class="caption grey--text">Endereço</div>
                    <div>Rua Capitão Severino Cesárino da Nóbrega, 176</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Complemento</div>
                    <div>Apt 102, Ed. Pinheiros</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Bairro</div>
                    <div>Centro</div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <div class="caption grey--text">Endereço</div>
                    <div>Rua Capitão Severino Cesárino da Nóbrega, 176</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Complemento</div>
                    <div>Apt 102, Ed. Pinheiros</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Bairro</div>
                    <div>Centro</div>
                </v-flex>
            </v-layout>
        </v-card>
        

    </v-form>
</template>
<script>
export default {
    name: 'form-cliente',
    data () {
        return {
            cliente: {
            }
        }
    },
    methods: {
        click (){
            console.log('clicou')
        }
    }
}
</script>
