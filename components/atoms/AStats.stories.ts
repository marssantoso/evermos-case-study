import AStats from './AStats.vue'

export default {
  title: 'atoms/Stats',
  component: AStats,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { AStats },
  template: '<a-stats v-bind="$props" />',
})
