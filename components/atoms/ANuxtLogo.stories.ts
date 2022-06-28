import ANuxtLogo from './ANuxtLogo.vue'

export default {
  title: 'atoms/NuxtLogo',
  component: ANuxtLogo,
  argTypes: {
    withText: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { ANuxtLogo },
  template: '<a-nuxt-logo v-bind="$props" />',
})
