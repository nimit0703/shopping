<template>
  <div class="nav-wrapper">
    <b-nav vertical class="w-20">
      <router-link to="/" tag="b-nav-item" exact-active-class="active"
        >Shoppp</router-link
      >
      <router-link to="products" tag="b-nav-item">Products</router-link>
      <router-link to="cart" tag="b-nav-item">Cart</router-link>
      <router-link to="checkout" tag="b-nav-item">Checkout</router-link>
      <template v-if="isLogin">
        <b-nav-item tag="b-nav-item" to="login" @click="logout">Logout</b-nav-item>
      </template>
      <template v-else>
        <router-link to="login" tag="b-nav-item">Login</router-link>
      </template>
    </b-nav>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    logout(){
      this.$store.commit('setLogin',false);
      this.$store.state.thisUser={};
    }
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
