<template>
  <div>
    {{ name }}
    <AppNumberInput :value="value" @onChange="onChange" />
  </div>
</template>

<script>
import VueTypes from "vue-types";
import AppNumberInput from "@/components/atoms/AppNumberInput";

export default {
  components: {
    AppNumberInput
  },
  props: {
    name: VueTypes.string.isRequired,
    value: VueTypes.number.isRequired
  },
  methods: {
    onChange(value) {
      this.$emit("onChange", value);
    }
  }
};
</script>
