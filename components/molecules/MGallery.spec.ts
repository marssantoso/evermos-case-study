import { shallowMount } from '@vue/test-utils'
import MGallery from './MGallery.vue'

describe('MGallery', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MGallery)
    expect(wrapper.vm).toBeTruthy()
  })
})
