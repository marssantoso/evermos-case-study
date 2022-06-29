import OProductGrid from './OProductGrid.vue'

export default {
  title: 'organisms/ProductGrid',
  component: OProductGrid,
  argTypes: {},
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { OProductGrid },
  template: '<o-product-grid v-bind="$props" />',
})
