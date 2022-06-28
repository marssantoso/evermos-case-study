import MNavbar from './MNavbar.vue'

export default {
  title: 'molecules/Navbar',
  component: MNavbar,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MNavbar },
  template: '<m-navbar v-bind="$props" />',
})
