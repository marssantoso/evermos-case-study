import { shallowMount } from '@vue/test-utils'
import ACheckbox from './ACheckbox.vue'

describe('ACheckbox', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ACheckbox)
    expect(wrapper.vm).toBeTruthy()
  })
})
