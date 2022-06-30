<template>
  <label :for="name" class="a-checkbox">
    <input :id="name" :name="name" type="checkbox" :checked="value" class="a-checkbox__input" @input="$emit('input', $event.target.checked)" />
    <span class="a-checkbox__value">{{ name }}</span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ACheckbox',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.a-checkbox {
  font-size: 0.875rem;
  cursor: pointer;
  padding: 2px 0;
}
</style>
