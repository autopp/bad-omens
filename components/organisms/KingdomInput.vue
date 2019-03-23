<template>
  <div>
    <ExtensionInput
      :value="$store.state.baseValue"
      name="基本"
      @onChange="onChangeBase"
    />
    <ExtensionInput
      :value="10 - $store.state.baseValue"
      name="夜想曲"
      @onChange="onChangeNocturne"
    />
  </div>
</template>

<script>
import ExtensionInput from "@/components/molecules/ExtensionInput";

export default {
  components: {
    ExtensionInput
  },
  methods: {
    onChangeBase(value) {
      this.$store.commit("changeBaseValue", parseInt(value));
    },
    onChangeNocturne(value) {
      this.$store.commit("changeBaseValue", 10 - parseInt(value));
    }
  }
};
</script>
