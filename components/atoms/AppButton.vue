<template>
  <v-btn @click="onClick">{{ label }}</v-btn>
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
