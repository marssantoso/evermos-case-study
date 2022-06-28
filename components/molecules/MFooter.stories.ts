import MFooter from './MFooter.vue'

export default {
  title: 'molecules/Footer',
  component: MFooter,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MFooter },
  template: '<m-footer v-bind="$props" />',
})
