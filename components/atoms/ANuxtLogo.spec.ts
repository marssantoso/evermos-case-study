import { mount } from '@vue/test-utils'
import ANuxtLogo from './ANuxtLogo.vue'

describe('ANuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ANuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
