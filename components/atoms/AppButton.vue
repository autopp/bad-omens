<template>
  <button @click="onClick">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClick(e) {
      this.$emit("onClick")
    }
  }
}
</script>
