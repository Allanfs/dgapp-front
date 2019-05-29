import ListarRecheio from "@/components/recheio/ListarRecheio.vue";
import ListarTamanho from "@/components/tamanho/ListarTamanho.vue";
import Cadastro from "@/components/TheCadastroView.vue"


export default {
  path: "/listar/",
  name: "listar",
  component: Cadastro,
  children: [
    {
      name: "Listar Recheio",
      path: "recheio",
      component: ListarRecheio
    },
    {
      name: "Listar Tamanho",
      path: "tamanho",
      component: ListarTamanho
    }
  ]

}