import OTutorial from './OTutorial.vue'

export default {
  title: 'organisms/Tutorial',
  component: OTutorial,
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { OTutorial },
  template: '<o-tutorial v-bind="$props" />',
})
