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
import { nameMap, boonList } from "@/lib/cardList";

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

      const restCards = this.$store.getters.restCards;
      Object.entries(this.$store.getters.kingdomValues).forEach(
        ([name, num]) => {
          if (num > restCards[name].length) {
            errors.push(`${nameMap[name]}のカード枚数が足りません`);
          }
        }
      );

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
