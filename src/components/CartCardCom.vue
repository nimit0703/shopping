<template>
  <div class="card">
    <div class="card-header">{{ item.name }}</div>
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <p class="card-text">
            {{ item.desc }}
          </p>
          <p class="card-text">
            {{ item.price }}
          </p>
        </div>

        <div>
          <b-form-spinbutton
            v-model="item.amount"
            @change="updateAmount"
          ></b-form-spinbutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/interface/Product";

export default {
  props: ["id"],
  data() {
    return {
      item: {} as any,
    };
  },
  created() {
    this.item = this.$store.getters.getCartItemById(this.id);
  },
  methods: {
    updateAmount() {
      console.log(this.item.amount)
      this.$store.commit("updateCartItemAmount", {
        id: this.id,
        amount: this.item.amount,
      });
    },
  },
};
</script>
