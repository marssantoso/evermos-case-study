import { shallowMount } from '@vue/test-utils'
import APaginationLink from './APaginationLink.vue'

describe('APaginationLink', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(APaginationLink)
    expect(wrapper.vm).toBeTruthy()
  })
})
