import MCarousel from './MCarousel.vue'

export default {
  title: 'molecules/Carousel',
  component: MCarousel,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MCarousel },
  template: '<m-carousel v-bind="$props" />',
})
