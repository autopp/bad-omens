<template>
  <button @click="onClick">{{ label }}</button>
</template>

<script>
import VueTypes from "vue-types";

export default {
  props: {
    label: VueTypes.string.isRequired
  },
  methods: {
    onClick(e) {
      this.$emit("onClick");
    }
  }
};
</script>
