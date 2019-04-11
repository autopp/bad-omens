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
          :value="$store.getters.nocturneValue"
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

const boonList = [
  { id: 1, name: "大地の恵み" },
  { id: 2, name: "田畑の恵み" },
  { id: 3, name: "炎の恵み" },
  { id: 4, name: "森の恵み" },
  { id: 5, name: "月の恵み" },
  { id: 6, name: "山の恵み" },
  { id: 7, name: "川の恵み" },
  { id: 8, name: "海の恵み" },
  { id: 9, name: "空の恵み" },
  { id: 10, name: "太陽の恵み" },
  { id: 11, name: "沼の恵み", will_o_wisp: true },
  { id: 12, name: "風の恵み" }
];

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

      this.$store.commit("setErrors", []);
      this.$store.commit("addSupply", this.selectSupply());
    },
    validateForGenerate() {
      const errors = [];
      if (this.$store.state.baseValue < 0 || this.$store.state.baseValue > 10) {
        errors.push("王国カードの数が不正です");
      }

      return errors;
    },
    selectSupply() {
      const supply = {};
      const kingdom = {};

      const restCards = this.$store.getters.restCards;
      Object.entries(restCards).forEach(([expansion, cards]) => {
        kingdom[expansion] = this.shuffleArray(cards).slice(
          0,
          this.$store.getters.kingdomValues[expansion]
        );
      });
      supply.kingdom = kingdom;
      if (kingdom.nocturne.some(card => card.druid)) {
        supply.druidBoons = this.shuffleArray(boonList).slice(0, 3);
      }

      return supply;
    },
    shuffleArray(ary) {
      const copied = ary.slice();
      for (let i = copied.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copied[i], copied[j]] = [copied[j], copied[i]];
      }
      return copied;
    }
  }
};
</script>
