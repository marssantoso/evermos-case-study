import MGallery from './MGallery.vue'

export default {
  title: 'molecules/Gallery',
  component: MGallery,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MGallery },
  template: '<m-gallery v-bind="$props" />',
})
