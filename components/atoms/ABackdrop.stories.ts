import ABackdrop from './ABackdrop.vue'

export default {
  title: 'atoms/Backdrop',
  component: ABackdrop,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { ABackdrop },
  template: '<a-backdrop v-bind="$props" />',
})
