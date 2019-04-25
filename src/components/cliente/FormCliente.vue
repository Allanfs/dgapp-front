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

        <v-card>
            <v-container fluid class="my-5">
                
                <!-- botão para adicionar -->
                <v-card  flat class="pa-3">
                    <v-layout>
                        <v-flex>
                            <popup 
                            header="Adicionar Telefone" 
                            btntexto="Adicionar Telefone" 
                            icon="add" 
                            classe="info">
                                <telefone/>
                            </popup>

                            <!-- <v-btn  flat class="info" @click="adicionar('telefone')">
                                <v-icon left small>add</v-icon>
                                Adicionar Telefone
                            </v-btn> -->
                        </v-flex>
                    </v-layout>
                </v-card>

                <!-- listagem de telefone-->
                <v-card flat class="pa-3">
                    <v-layout row wrap @click="click">
                        <v-flex xs12 md2>
                            <div class="caption grey--text">Número</div>
                            <div>3235-6050</div>
                        </v-flex>
                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">É whatsapp</div>
                            <div>Sim</div>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                </v-card>
            </v-container>
        </v-card>

        <v-card>
            <v-container fluid class="my-5">
                
                <!-- botão para adicionar -->
                <v-card  flat class="pa-3">
                    <v-layout>
                        <v-flex @click="click">
                            <popup 
                            header="Adicionar Endereço" 
                            btntexto="Adicionar Endereço" 
                            icon="add" 
                            classe="info">
                                <endereco/>
                            </popup>
                        </v-flex>
                    </v-layout>
                </v-card>

                <!-- listagem de endereço-->
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
                    <v-divider></v-divider>
                </v-card>
            </v-container>
        </v-card>
        
    </v-form>
</template>
<script>
import ListarEAdicionarDadoVue from '../utils/ListarEAdicionarDado.vue'
import PopupVue from '../Popup.vue'
import FormEnderecoVue from '../endereco/FormEndereco.vue'
import FormTelefoneVue from '../telefone/FormTelefone.vue'

export default {
    name: 'form-cliente',
    components: {
        'listar-add' : ListarEAdicionarDadoVue,
        'popup': PopupVue,
        'endereco': FormEnderecoVue,
        'telefone': FormTelefoneVue
    },
    data () {
        return {
            cliente: {
            },
            dialog: false
        }
    },
    methods: {
        click (){
            
        },
        adicionar () {
            // abre pop-up para inserir endereço
            // adicionar o endereço cadastrado na lista de endereços
        },
        endereco (nome) {
            // aqui ele pode pegar um componente importado
            // ou um componente importado atravez da função:
            //  Vue.component() feita no main.js
            return nome
        },
        fecharDialog () {
            this.dialog = !dialog
        }
    },
    computed: {
    }
}
</script>
