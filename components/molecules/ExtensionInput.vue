<template>
  <div>
    {{ name }}
    <AppNumberInput :value="value" @onChange="onChange" />
  </div>
</template>

<script>
import AppNumberInput from "@/components/atoms/AppNumberInput";

export default {
  components: {
    AppNumberInput
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    onChange(value) {
      this.$emit("onChange", value);
    }
  }
};
</script>
