import { shallowMount } from '@vue/test-utils'
import MFilter from './MFilter.vue'

describe('MFilter', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MFilter)
    expect(wrapper.vm).toBeTruthy()
  })
})
