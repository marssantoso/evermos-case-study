import AInput from './AInput.vue'

export default {
  title: 'atoms/Input',
  component: AInput,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { AInput },
  template: '<a-input v-bind="$props" />',
})
