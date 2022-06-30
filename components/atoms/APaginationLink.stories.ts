import APaginationLink from './APaginationLink.vue'

export default {
  title: 'atoms/PaginationLink',
  component: APaginationLink,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { APaginationLink },
  template: '<a-pagination-link v-bind="$props" />',
})
