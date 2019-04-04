<template>
  <v-card>
    <v-card-text>
      <div v-for="(cards, name) in supply.kingdom" :key="name">
        {{ cards.map(card => card.name).join("・") }}
      </div>
      <div v-if="heirlooms.length > 0">家宝: {{ heirlooms.join("・") }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueTypes from "vue-types";

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
    }
  }
};
</script>
