import { shallowMount } from '@vue/test-utils'
import ADivider from './ADivider.vue'

describe('ADivider', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ADivider)
    expect(wrapper.vm).toBeTruthy()
  })
})
