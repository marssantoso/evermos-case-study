import { shallowMount } from '@vue/test-utils'
import ABackdrop from './ABackdrop.vue'

describe('ABackdrop', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ABackdrop)
    expect(wrapper.vm).toBeTruthy()
  })
})
