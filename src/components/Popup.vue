<template>
    <v-dialog v-model="dialog" max-width="50%">
        
        <v-btn slot="activator" :class="classe">
            <v-icon small left>{{icon}}</v-icon>
            {{btntexto}}
        </v-btn>
        
        <v-card>
            <v-card-title>
                <h2>{{header}}</h2>
            </v-card-title>
            <v-card-text>
                <slot></slot>
            </v-card-text>
            <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn color="blue darken-1" flat @click="salvar">Salvar</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
        </v-card>

        

    </v-dialog>
</template>
<script>
export default {
    name: 'popup',
    props: {
        btntexto: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        classe: {
            type: String,
            required: false
        },
        header: {
            type: String,
            required: true
        },
        dialog: {
            type: Boolean,
            required: false
        }
    },
    data () {
       return {
        //    dialog: true
       } 
    },
    methods: {
        salvar () {
            this.dialog = false
            // this.$emit('input', this.)
        }
    }
}
</script>

