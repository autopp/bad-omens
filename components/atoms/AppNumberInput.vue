<template>
  <input type="number" v-model="internalValue" min="0" max="10" step="1" />
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(newValue) {
        if (this.value !== newValue) {
          this.$emit("onChange", newValue)
        }
      }
    }
  }
}
</script>
