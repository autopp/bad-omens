<template>
  <v-text-field
    v-model="internalValue"
    :label="label"
    type="number"
    min="0"
    max="10"
    step="1"
  />
</template>

<script>
import VueTypes from "vue-types";

export default {
  props: {
    label: VueTypes.string.isRequired,
    value: VueTypes.number.isRequired
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        if (this.value !== newValue) {
          this.$emit("onChange", newValue);
        }
      }
    }
  }
};
</script>
