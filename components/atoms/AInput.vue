<template>
  <input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :class="['a-input', { 'a-input--block': isBlock }]"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.a-input {
  border: unset;
  background-color: white;
  box-shadow: $shadow-light;
  padding: 12px;
  border-radius: $radius-1;
  box-sizing: border-box;
  &--block {
    width: 100%;
  }
}
</style>
