<template>
    <div>
        <v-container fluid grid-list-md>
            <v-card  disabled >
                <v-card-title>
                    <h2>Cadastrar Cliente</h2>
                </v-card-title>

                <v-card-text>
                    <form-cliente 
                    titulo="Cliente" >
                        
                    </form-cliente>
                </v-card-text>

                <v-card-actions class="pb-3 pl-3">
                    <v-btn  class="success" >Salvar</v-btn>
                    <v-btn  class="error">Cancelar</v-btn>
                </v-card-actions>

            </v-card>
        </v-container>
    </div>
</template>
<script>
import FormCliente from './FormCliente.vue'

export default {
    data () {
        return {
            header: []
        }
    },
    components: {
        'form-cliente' : FormCliente
    }
}
</script>

