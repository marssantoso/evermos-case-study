---
to: components/<%= type %>/<%= name %>.spec.ts
---
import { shallowMount } from '@vue/test-utils'
import <%= name %> from './<%= name %>.vue'

describe('<%= name %>', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(<%= name %>)
    expect(wrapper.vm).toBeTruthy()
  })
})
