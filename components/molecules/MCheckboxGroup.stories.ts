import MCheckboxGroup from './MCheckboxGroup.vue'

export default {
  title: 'molecules/CheckboxGroup',
  component: MCheckboxGroup,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MCheckboxGroup },
  template: '<m-checkbox-group v-bind="$props" />',
})
