<template>
  <div class="a-select">
    <label :for="id" class="a-select__label">{{ label }}:</label>
    <select :id="id" :name="id" :value="value" class="a-select__input" @input="handleSelect">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Option } from '~/utils/types'

export default Vue.extend({
  name: 'ASelect',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: (): Option[] => [],
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    handleSelect(e: Event) {
      this.$emit('input', (e.target as HTMLSelectElement).value)
    },
  },
})
</script>

<style lang="scss" scoped>
.a-select {
  &__label {
    font-size: 0.875rem;
  }
  &__input {
    cursor: pointer;
    border: 1px solid $color-neutral-2;
    border-radius: $radius-1;
    background-color: white;
    box-shadow: $shadow-light;
    padding: 8px 24px 8px 12px;
    appearance: none;
    background-image: url('~assets/images/icon-chevron-down.svg');
    background-repeat: no-repeat;
    background-position-x: calc(100% - 4px);
    background-size: 1rem 100%;
    color: $color-dark;
  }
}
</style>
