<template>
  <div>
    <v-layout row wrap>
      <v-flex lg4>
        <v-card>
          <AppNumberInput
            :value="$store.state.baseValue"
            label="基本"
            @onChange="onChangeBase"
          />
        </v-card>
      </v-flex>
      <v-flex lg4>
        <v-card>
          <AppNumberInput
            :value="10 - $store.state.baseValue"
            label="夜想曲"
            @onChange="onChangeNocturne"
          />
        </v-card>
      </v-flex>
      <v-flex lg1>
        <v-card>
          <AppButton label="生成" @onClick="onGenerate" />
        </v-card>
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
      this.$store.commit("setDummySupplies");
    }
  }
};
</script>
