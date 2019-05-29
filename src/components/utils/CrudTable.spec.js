import { shallow } from '@vue/test-utils'
import CrudTable from './CrudTable.vue'

describe('Funcionalidades da CrudTable', () => {
  test('verifica o titulo presente na tabela', () => {
    const tituloEsperado = 'TITULO-TAMANHO'
    const wrapper = shallow(CrudTable,{
      propsData:{titulo: tituloEsperado}
    })
    expect(wrapper.vm.titulo).toBe(tituloEsperado)
  }),
  
  test('verifica o componente que a tabela deve apontar', () => {
    const componenteEsperado = 'COMPONENTE'
    const wrapper = shallow(CrudTable,{
      propsData:{componente: componenteEsperado}
    })
    expect(wrapper.vm.componente).toBe(componenteEsperado)
  })
  // it('verificar o valor do titulo da tabela', () => {
  //   const tituloEsperado = 'TITULO-TAMANHO'
  //   const wrapper = shallowMount(CrudTable, {
  //     propsData: { tituloEsperado }
  //   })
  //   expect(wrapper.text()).toBe(tituloEsperado)
  // })

})