<template>
  <div>
    <div class="d-flex m-auto text-center justify-content-center">
      <span> products </span>
    </div>
    <template>
      <div class="d-flex flex-wrap">
        <CardComp v-for="product in products" :product="product" :key="product.id" class="m-3"></CardComp>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import CardComp from "../components/CardComp.vue";
import _ from "lodash";
export default {
  data() {
    return {
      products: [] as any,
    };
  },
  created() {
    this.products = this.$store.state.products;
  },
  beforeDestroy() {
    console.log("beforeDestroyy :: AddData");
    const debouncedSpinner = _.debounce(() => {
      this.$store.commit("setSpinnerVisibility", false);
    }, 700);
    this.$store.commit("setSpinnerVisibility", true);
    debouncedSpinner();
  },
  components: { CardComp },
};
</script>
