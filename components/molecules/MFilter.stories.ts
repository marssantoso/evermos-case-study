import MFilter from './MFilter.vue'

export default {
  title: 'molecules/Filter',
  component: MFilter,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MFilter },
  template: '<m-filter v-bind="$props" />',
})
