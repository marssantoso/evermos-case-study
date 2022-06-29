import { shallowMount } from '@vue/test-utils'
import OProductGrid from './OProductGrid.vue'

describe('OProductGrid', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(OProductGrid)
    expect(wrapper.vm).toBeTruthy()
  })
})
