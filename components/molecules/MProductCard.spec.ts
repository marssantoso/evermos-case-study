import { shallowMount } from '@vue/test-utils'
import MProductCard from './MProductCard.vue'

describe('MProductCard', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MProductCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
