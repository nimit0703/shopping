<template>
  <div>
    <div class="container text-center mt-4">
      <h2>Products</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <CardComp
              v-for="product in products"
              :product="product"
              :key="product.id"
              class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            ></CardComp>
          </div>
        </div>
      </div>
    </div>
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
