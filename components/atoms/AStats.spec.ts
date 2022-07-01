import { shallowMount } from '@vue/test-utils'
import AStats from './AStats.vue'

describe('AStats', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AStats)
    expect(wrapper.vm).toBeTruthy()
  })
})
