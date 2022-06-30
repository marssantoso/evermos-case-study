import { shallowMount } from '@vue/test-utils'
import MPagination from './MPagination.vue'

describe('MPagination', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MPagination)
    expect(wrapper.vm).toBeTruthy()
  })
})
