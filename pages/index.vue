<template>
  <main>
    <v-toolbar><v-toolbar-title>Bad Omens</v-toolbar-title></v-toolbar>
    <v-content>
      <v-container grid-list-xl>
        <KingdomInput />
        <v-alert
          v-if="$store.state.errors.length > 0"
          :value="true"
          type="error"
        >
          <div v-for="(error, index) in $store.state.errors" :key="index">
            {{ error }}
          </div>
        </v-alert>
        <v-layout row wrap>
          <v-flex
            v-for="(supply, index) in $store.state.supplies"
            :key="index"
            lg12
          >
            <SupplyPanel :supply="supply" />
          </v-flex>
        </v-layout>
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
  }
};
</script>
