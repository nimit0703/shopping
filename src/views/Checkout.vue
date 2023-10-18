<template>
  <div>
    <template class="checkout d-flex" v-if="!paymentDone">
      <b-card title="Checkout" sub-title="" class="d-flex">
        <b-card-text> </b-card-text>
        <div class="d-flex">
          <div class="">
            <b-card-text>Amount </b-card-text>
            <b-card-text>GST</b-card-text>
            <b-card-text>Shipping Charge</b-card-text>
            <hr />
            <h6>Total Amount</h6>
          </div>
          <div class="">
            <b-card-text>: {{ calculateAmount }} $</b-card-text>
            <b-card-text>: {{ calculateGST }} $</b-card-text>
            <b-card-text>: {{ calculateShippingCharge }} $</b-card-text>
            <hr />
            <h6>: {{ calculateTotalAmount }} $</h6>
          </div>
        </div>
        <div class="">
          <b-button
            variant="primary"
            :disabled="calculateAmount === 0"
            @click="checkout"
            >Checkout</b-button
          >
        </div>
      </b-card>
    </template>
    <template class="success" v-else>
      <div class="success">
        <b-icon-check2-circle class="success-icon"></b-icon-check2-circle>
        <p>Payment successfull !!</p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Product from "@/interface/Product";
import _ from "lodash";

export default {
  data() {
    return {
      paymentDone: false,
    };
  },
  computed: {
    items() {
      const items = this.$store.state.cart[this.$store.state.thisUser.id];
      if (items) {
        return items;
      }
      return 0;
    },
    calculateAmount() {
      return _.sumBy(this.items, (item: Product) =>
        this.total(item.amount, item.price)
      );
    },
    calculateGST() {
      if (_.isEmpty(this.items)) return 0;
      return this.calculateAmount * 0.18;
    },
    calculateShippingCharge() {
      if (_.isEmpty(this.items)) return 0;
      const total = this.calculateAmount + this.calculateGST;
      return total >= 2500 ? 0 : 500;
    },
    calculateTotalAmount() {
      return (
        this.calculateAmount + this.calculateGST + this.calculateShippingCharge
      );
    },
  },
  methods: {
    total(amount: number, price: number) {
      return amount * price;
    },
    checkout() {
      const debouncedSpinner = _.debounce(() => {
        this.$store.commit("setSpinnerVisibility", false);
      }, 200);

      this.$store.commit("clearCart");
      this.$store.commit("setSpinnerVisibility", true);
      this.paymentDone = true;

      debouncedSpinner();
    },
  },
  beforeDestroy() {
    const debouncedSpinner = _.debounce(() => {
      this.$store.commit("setSpinnerVisibility", false);
    }, 700);
    this.$store.commit("setSpinnerVisibility", true);
    debouncedSpinner();
  },
};
</script>

<style scoped>
.success-icon {
  font-size: 10vw;
  color: Green;
}
.success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12% auto;
}
.success p {
  font-size: 4vw;
  color: Green;
}
</style>
