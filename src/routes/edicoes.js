import AddRecheio from "@/components/recheio/AddRecheio.vue";
import Cadastro from "@/components/cadastro.vue"

export default {
  path: "/editar",
  name: "Editar",
  component: Cadastro,
  children: [
    {
      path: "recheio/:id",
      name: "recheio",
      component: AddRecheio
    }
  ]
}