<template>
  <div class="m-checkbox-group">
    <a-checkbox
      v-for="option in options"
      :key="option.name"
      :name="option.name"
      :value="value.includes(option.value)"
      @input="handleInput($event, option.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Option } from '~/utils/types'

export default Vue.extend({
  name: 'MCheckboxGroup',
  props: {
    value: {
      type: Array as PropType<String[]>,
      default: (): String[] => [],
    },
    options: {
      type: Array as PropType<Option[]>,
      default: (): Option[] => [],
    },
  },
  methods: {
    handleInput(isChecked: boolean, value: string) {
      const newValue = isChecked ? [...this.value, value] : this.value.filter((v) => v !== value)
      this.$emit('input', newValue)
    },
  },
})
</script>

<style lang="scss" scoped>
.m-checkbox-group {
  display: flex;
  flex-direction: column;
}
</style>
