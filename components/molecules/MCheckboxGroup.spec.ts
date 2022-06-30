import { shallowMount } from '@vue/test-utils'
import MCheckboxGroup from './MCheckboxGroup.vue'

describe('MCheckboxGroup', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MCheckboxGroup)
    expect(wrapper.vm).toBeTruthy()
  })
})
