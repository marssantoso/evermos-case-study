import MSidebar from './MSidebar.vue'

export default {
  title: 'molecules/Sidebar',
  component: MSidebar,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MSidebar },
  template: '<m-sidebar v-bind="$props" />',
})
