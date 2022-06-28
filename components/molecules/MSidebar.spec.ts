import { shallowMount } from '@vue/test-utils'
import MSidebar from './MSidebar.vue'

describe('MSidebar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MSidebar)
    expect(wrapper.vm).toBeTruthy()
  })
})
