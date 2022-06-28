import { shallowMount } from '@vue/test-utils'
import MFooter from './MFooter.vue'

describe('MFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MFooter)
    expect(wrapper.vm).toBeTruthy()
  })
})
