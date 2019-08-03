<template>
  <div>
    <v-layout justify-center>
          <v-dialog v-model="modal.exibe" max-width="800px">
            <adicionar-cliente :titulo="modal.titulo" :cliente="modal.dado" ignorarSalvamento>
              <template #acoes>
                <v-btn class="success" block>Criar pedido para&nbsp;<span class="yellow--text">{{modal.dado.nome.split(" ")[0]}}</span></v-btn>
              </template>
            </adicionar-cliente>
          </v-dialog>
        </v-layout>
    <v-data-table :items="clientes" :headers="headers">
      <template v-slot:items="props">
        
        <td>{{ props.item.nome }}</td>
        <td>
          <span
            v-for="telefone in props.item.telefone"
            :key="telefone.id"
            v-html="telefone.numero"
          />
        </td>
        <td>
          <v-icon @click="exibir(props.item)">info</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import clienteDao from "../../store/api/services/cliente.js";
import AddCliente from "./AddCliente.vue";

export default {
  name: "listar-clientes",
  components: {
    "adicionar-cliente": AddCliente
  },
  data: () => ({
    modal: {
      exibe: false,
      titulo: null,
      dado: null
    },
    selected: [],
    clientes: [],
    headers: [
      { text: "Nome", value: "nome", align: "left" },
      { text: "Número", value: "numero", align: "left" }
    ]
  }),
  mounted() {

    // busca todos os clientes cadastrados
    clienteDao.listarTodos().then(({ data }) => {
      this.clientes = data;
    });

  },
  methods: {

    exibir(cliente) {
      this.modal.dado = cliente;
      this.modal.exibe = true;
      this.modal.titulo = cliente.nome
    }

  }
};
</script>
