<template>
  <div>
    <v-layout row wrap>
      <v-flex lg2>
        <AppNumberInput
          :value="$store.state.baseValue"
          label="基本"
          @onChange="onChangeBase"
        />
      </v-flex>
      <v-flex lg2>
        <AppNumberInput
          :value="10 - $store.state.baseValue"
          label="夜想曲"
          @onChange="onChangeNocturne"
        />
      </v-flex>
      <v-flex lg1>
        <AppButton label="生成" @onClick="onGenerate" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AppNumberInput from "@/components/atoms/AppNumberInput";
import AppButton from "@/components/atoms/AppButton";

export default {
  components: {
    AppNumberInput,
    AppButton
  },
  methods: {
    onChangeBase(value) {
      this.$store.commit("changeBaseValue", parseInt(value));
    },
    onChangeNocturne(value) {
      this.$store.commit("changeBaseValue", 10 - parseInt(value));
    },
    onGenerate() {
      const errors = this.validateForGenerate();
      if (errors.length > 0) {
        this.$store.commit("setErrors", errors);
        return;
      }

      this.$store.commit("setDummySupplies");
    },
    validateForGenerate() {
      const errors = [];
      if (this.$store.state.baseValue < 0 || this.$store.state.baseValue > 10) {
        errors.push("王国カードの数が不正です");
      }

      return errors;
    }
  }
};
</script>
