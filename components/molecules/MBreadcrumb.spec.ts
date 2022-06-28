import { shallowMount } from '@vue/test-utils'
import MBreadcrumb from './MBreadcrumb.vue'

describe('MBreadcrumb', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MBreadcrumb)
    expect(wrapper.vm).toBeTruthy()
  })
})
