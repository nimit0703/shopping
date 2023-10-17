<template>
  <div class="p-5">
    <CartCardCom
      v-for="item in items"
      :key="item.id"
      :item="item"
      @updateAmount="updateCart"
      class="ml-5 mt-2"
    ></CartCardCom>
  </div>
</template>

<script lang="ts">
import CartCardCom from "../components/CartCardCom.vue";
import Product from "../interface/Product";
import _ from "lodash";

export default {
  data() {
    return {
      items: [] as Product[],
    };
  },
  created() {
    this.items = this.$store.state.cart;
  },
  beforeDestroy() {
    const debouncedSpinner = _.debounce(() => {
      this.$store.commit("setSpinnerVisibility", false);
    }, 700);
    this.$store.commit("setSpinnerVisibility", true);
    debouncedSpinner();
  },
  components: { CartCardCom },
  methods: {
    updateCart(updatedItem: Product) {
      const index = _.findIndex(this.items, { id: updatedItem.id });
      if (index !== -1) {
        this.items[index] = updatedItem;
        this.$store.commit("setTocart", updatedItem);
      }
    },
  },
};
</script>
