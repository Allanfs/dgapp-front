<template>
    <div>
        <v-container fluid grid-list-md>
            <v-card  disabled >
                <v-card-title>
                    <h2>Cadastrar Recheio</h2>
                </v-card-title>

                <v-card-text>
                    <form-recheio></form-recheio>
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
import FormRecheio from '../cliente/FormCliente.vue'

export default {
    components: {
        'form-recheio' : FormRecheio
    }    
}
</script>

