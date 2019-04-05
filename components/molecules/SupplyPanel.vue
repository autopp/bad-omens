<template>
  <v-card>
    <v-card-text>
      <div v-for="(cards, name) in supply.kingdom" :key="name">
        {{ cards.map(card => card.name).join("・") }}
      </div>
      <div v-if="heirlooms.length > 0">家宝: {{ heirlooms.join("・") }}</div>
      <div v-if="supply.druidBoons">
        ドルイドの恵み:
        {{ supply.druidBoons.map(card => card.name).join("・") }}
      </div>
      <div v-if="extraCards.length > 0">
        サプライ外: {{ extraCards.join("・") }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueTypes from "vue-types";

const extraMap = {
  boon: "恵み",
  hex: "呪詛",
  will_o_wisp: "ウィル・オ・ウィスプ",
  imp: "小悪魔",
  ghost: "幽霊",
  wish: "願い",
  bat: "蝙蝠",
  zombie: "ゾンビ3種"
};

export default {
  props: {
    supply: VueTypes.shape({
      kingdom: VueTypes.objectOf(
        VueTypes.arrayOf(
          VueTypes.shape({
            id: VueTypes.integer.isRequired,
            name: VueTypes.string.isRequired,
            heirloom: VueTypes.string,
            druid: VueTypes.bool.def(false),
            boon: VueTypes.bool.def(false),
            hex: VueTypes.bool.def(false),
            willOWisp: VueTypes.bool.def(false),
            imp: VueTypes.bool.def(false),
            ghost: VueTypes.bool.def(false),
            wish: VueTypes.bool.def(false),
            zombie: VueTypes.bool.def(false),
            bat: VueTypes.bool.def(false)
          })
        )
      ),
      druidBoons: VueTypes.arrayOf(
        VueTypes.shape({
          id: VueTypes.integer.isRequired,
          name: VueTypes.string.isRequired,
          willOWisp: VueTypes.bool
        })
      )
    })
  },
  computed: {
    heirlooms: function() {
      const heirlooms = [];
      this.supply.kingdom.nocturne.forEach(card => {
        if (card.heirloom) {
          heirlooms.push(card.heirloom);
        }
      });
      return heirlooms;
    },
    extraCards: function() {
      const extraCards = [];
      ["boon", "hex", "imp", "ghost", "wish", "bat", "zombie"].forEach(name => {
        if (this.supply.kingdom.nocturne.some(card => card[name])) {
          extraCards.push(extraMap[name]);
        }
      });

      if (
        this.supply.kingdom.nocturne.some(
          card =>
            card.willOWisp ||
            (this.supply.druidBoons &&
              this.supply.druidBoons.some(boon => boon.willOWisp))
        )
      ) {
        extraCards.push(extraMap.will_o_wisp);
      }

      return extraCards;
    }
  }
};
</script>
