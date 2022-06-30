import { shallowMount } from '@vue/test-utils'
import ASelect from './ASelect.vue'

describe('ASelect', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ASelect)
    expect(wrapper.vm).toBeTruthy()
  })
})
