<template>
  <div class="p-5">
    <template v-if="emptyCart">
      <div class="empty">
          <b-icon-cart3 class="empty-icon text-secondary"></b-icon-cart3>
          <p class="text-secondary">Nothing to show ! Go and Buy something ...</p>
        </div>
    </template>
    <CartCardCom
      v-for="item in items"
      :key="item.id"
      :product="item"
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
      items: {} as any,
    };
  },
  computed:{
    emptyCart(){
      return _.isEmpty(this.items)
    }
  },
  created() {
    this.items= this.$store.state.cart[this.$store.state.thisUser.id]
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
<style scoped>
.empty-icon {
  font-size: 8vw;
}
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12% auto;
}
.empty p {
  font-size: 3vw;
}
</style>
