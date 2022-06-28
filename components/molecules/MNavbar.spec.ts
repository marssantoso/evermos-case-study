import { shallowMount } from '@vue/test-utils'
import MNavbar from './MNavbar.vue'

describe('MNavbar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MNavbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
