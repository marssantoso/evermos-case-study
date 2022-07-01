import ADivider from './ADivider.vue'

export default {
  title: 'atoms/Divider',
  component: ADivider,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { ADivider },
  template: '<a-divider v-bind="$props" />',
})
