import MProductCard from './MProductCard.vue'

export default {
  title: 'molecules/ProductCard',
  component: MProductCard,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MProductCard },
  template: '<m-product-card v-bind="$props" />',
})
