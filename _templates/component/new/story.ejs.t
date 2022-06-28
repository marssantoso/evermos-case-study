---
to: components/<%= type %>/<%= name %>.stories.ts
---
import <%= name %> from './<%= name %>.vue'

export default {
  title: '<%= storyName %>',
  component: <%= name %>,
  argTypes: {
    
  },
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { <%= name %> },
  template: '<<%= componentName %> v-bind="$props" />',
})
