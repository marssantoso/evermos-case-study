import ACheckbox from './ACheckbox.vue'

export default {
  title: 'atoms/Checkbox',
  component: ACheckbox,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { ACheckbox },
  template: '<a-checkbox v-bind="$props" />',
})
