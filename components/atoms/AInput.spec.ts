import { shallowMount } from '@vue/test-utils'
import AInput from './AInput.vue'

describe('AInput', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AInput)
    expect(wrapper.vm).toBeTruthy()
  })
})
