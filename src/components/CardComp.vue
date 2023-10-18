<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="`https://picsum.photos/600/300/?image=${product.id}`"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-3"
    >
      <b-card-text>
        {{ product.desc }}
      </b-card-text>
      <div class="d-flex justify-content-between align-items-center">
        <b-card-text class="pt-2">Price: {{ product.price }}</b-card-text>
        <b-button variant="primary" class="mb-2" @click.prevent="addToCartList">Buy it</b-button>
      </div>
    </b-card>
  </div>
</template>


<script lang="ts">
export default {
  props: ["product"],
  methods: {
    addToCartList() {
      this.$store.commit("setToCart", this.product);
    },
  },
};
</script>
