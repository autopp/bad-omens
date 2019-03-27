<template>
  <div />
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
            druid: VueTypes.bool,
            boon: VueTypes.bool,
            hex: VueTypes.bool,
            willOWisp: VueTypes.bool,
            imp: VueTypes.bool,
            ghost: VueTypes.bool,
            wish: VueTypes.bool,
            zombie: VueTypes.bool,
            bat: VueTypes.bool
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
  }
};
</script>
