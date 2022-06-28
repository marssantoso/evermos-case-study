import MBreadcrumb from './MBreadcrumb.vue'

export default {
  title: 'molecules/Breadcrumb',
  component: MBreadcrumb,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MBreadcrumb },
  template: '<m-breadcrumb v-bind="$props" />',
})
