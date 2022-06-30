import ASelect from './ASelect.vue'

export default {
  title: 'atoms/Select',
  component: ASelect,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { ASelect },
  template: '<a-select v-bind="$props" />',
})
