import { shallow } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  test('é uma instância Vue', () => {
    const wrapper = shallow(App)
    expect(wrapper.isVueInstance()).toBeTruthy
  })
 
})