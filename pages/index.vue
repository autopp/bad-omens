<template>
  <main>
    <v-toolbar><v-toolbar-title>Bad Omens</v-toolbar-title></v-toolbar>
    <v-content>
      <v-container>
        <KingdomInput />
        <div v-for="(supply, index) in $store.state.supplies" :key="index">
          <SupplyPanel :supply="supply" />
        </div>
      </v-container>
    </v-content>
  </main>
</template>

<script>
import "vuetify/dist/vuetify.min.css";
import AppButton from "@/components/atoms/AppButton";
import KingdomInput from "@/components/organisms/KingdomInput";
import SupplyPanel from "@/components/molecules/SupplyPanel";

export default {
  components: {
    AppButton,
    KingdomInput,
    SupplyPanel
  },
  methods: {
    onGenerate() {
      this.$store.commit("setDummySupplies");
    }
  }
};
</script>
