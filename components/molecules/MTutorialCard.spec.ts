import { mount } from '@vue/test-utils'
import MTutorialCard from './MTutorialCard.vue'

describe('MTutorialCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MTutorialCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
