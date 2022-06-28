import { mount } from '@vue/test-utils'
import OTutorial from './OTutorial.vue'

describe('OTutorial', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(OTutorial)
    expect(wrapper.vm).toBeTruthy()
  })
})
