<template>
  <input v-model="internalValue" type="number" min="0" max="10" step="1" />
</template>

<script>
import VueTypes from "vue-types";

export default {
  props: {
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
