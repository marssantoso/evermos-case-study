import MTutorialCard from './MTutorialCard.vue'

export default {
  title: 'molecules/TutorialCard',
  component: MTutorialCard,
}

export const Default = (_args: any, { argTypes }: { argTypes: any }) => ({
  props: Object.keys(argTypes),
  components: { MTutorialCard },
  template: '<m-tutorial-card v-bind="$props" />',
})
