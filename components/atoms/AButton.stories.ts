import AButton from './AButton.vue'

export default {
  title: 'atoms/Button',
  component: AButton,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { AButton },
  template: '<a-button v-bind="$props" />',
})
