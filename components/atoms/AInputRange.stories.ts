import AInputRange from './AInputRange.vue'

export default {
  title: 'atoms/InputRange',
  component: AInputRange,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { AInputRange },
  template: '<a-input-range v-bind="$props" />',
})
