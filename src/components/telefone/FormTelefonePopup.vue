<template>
    <v-dialog v-model="dialog" max-width="60%">
        <v-btn slot="activator" class="info">
            <v-icon small left>add</v-icon>
            Adicionar Telefone
        </v-btn>
        
        <v-card>
            <v-container grid-list-md>
            <v-card-title>
                <h2>Adicionar Telefone</h2>
            </v-card-title>
            <v-card-text>
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
            </v-card-text>

            <v-card-actions>
                <v-btn color="blue darken-1" flat @click="salvar" :disabled="camposObrigatorios">Salvar</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
            </v-container>
        </v-card>

        

    </v-dialog>
</template>
<script>
export default {
    name: 'form-telefone-popup',
    
    data () {
        return {
            telefone: {
                ddd: '83',
                numero: '',
                whatsapp: false,
                observacao: ''
            },
            dialog: false
       } 
    },
    methods: {
        salvar () {
            this.dialog = false
            console.log("FormTelefonePopup precisa ")
            let newTelefone = this.telefone
            this.$emit('inputTelefone', {nome: 'telefones', payload: newTelefone})
            this.telefone = {
                ddd: '83',
                numero: '',
                whatsapp: false,
                observacao: ''
            }
            // this.$emit('input', this.)
        }
        
    },
    computed: {
        camposObrigatorios () {
            if (this.telefone.numero === '') {
                return true
            }else{
                return false
            }
        }
    }
}
</script>

