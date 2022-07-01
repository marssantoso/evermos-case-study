import { shallowMount } from '@vue/test-utils'
import MCarousel from './MCarousel.vue'

describe('MCarousel', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MCarousel)
    expect(wrapper.vm).toBeTruthy()
  })
})
