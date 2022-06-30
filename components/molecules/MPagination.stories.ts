import MPagination from './MPagination.vue'

export default {
  title: 'molecules/Pagination',
  component: MPagination,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MPagination },
  template: '<m-pagination v-bind="$props" />',
})
