import { shallowMount } from '@vue/test-utils'
import AButton from './AButton.vue'

describe('AButton', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AButton)
    expect(wrapper.vm).toBeTruthy()
  })
})
