<template>
  <div class="a-input-range">
    <label :for="id" class="a-input-range__label">{{ label }}</label>
    <input :id="id" :value="value" :name="name" :min="min" :max="max" type="range" class="a-input-range__input" @input="handleInput" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { debounce } from '~/utils/helpers'

export default Vue.extend({
  name: 'AInputRange',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 1000000,
    },
  },
  methods: {
    handleInput(e: Event) {
      const value = (e.target as HTMLInputElement).value
      debounce(() => this.$emit('input', parseInt(value)), 250)
    },
  },
})
</script>

<style lang="scss" scoped>
.a-input-range {
  margin-bottom: 8px;
  &__label {
    font-size: 0.875rem;
  }
  &__input {
    width: 100%;
  }
}
</style>
