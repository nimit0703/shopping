<template>
  <div class="nav-wrapper">
    <b-nav vertical class="w-20">
      <router-link to="/" tag="b-nav-item" exact-active-class="active"
        >Shoppp</router-link
      >
      <router-link to="products" tag="b-nav-item">Products</router-link>
      <router-link to="cart" tag="b-nav-item">Cart</router-link>
      <router-link to="checkout" tag="b-nav-item">Checkout</router-link>
      <b-nav-item tag="b-nav-item" to="logout" v-show="isSignIn"
        >Logout</b-nav-item
      >
      <b-nav-item tag="b-nav-item" to="login" v-show="!isSignIn"
        >Login</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.nav-wrapper {
  min-height: 100vh;
}
</style>
