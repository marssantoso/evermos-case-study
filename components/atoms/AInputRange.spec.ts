import { shallowMount } from '@vue/test-utils'
import AInputRange from './AInputRange.vue'

describe('AInputRange', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AInputRange)
    expect(wrapper.vm).toBeTruthy()
  })
})
