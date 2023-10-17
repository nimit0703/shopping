<template>
  <div>
    <b-card
      :title="product.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ product.desc }}
      </b-card-text>
      <b-card-text> price :{{ product.price }} </b-card-text>
      <b-button href="#" variant="primary" class="ml-5" @click.prevent="addToCartList">buy it</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
export default {
  props: ["product"],
  methods: {
    addToCartList(){
      this.$store.commit('setTocart',this.product)
    }
  },
};
</script>
