<template>
  <section class="container">
    <div>
      <h1 class="title">
        Bad Omens
      </h1>
      <KingdomInput />
      <AppButton label="生成" @onClick="onGenerate" />
      <div v-for="(supply, index) in $store.state.supplies" :key="index">
        <SupplyPanel :supply="supply" />
      </div>
    </div>
  </section>
</template>

<script>
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

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
