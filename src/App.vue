<template>
  <div>
    <template>
      <div class="d-flex align-items-stretch">
        <SidebarComponent class="border-right"></SidebarComponent>
        <BeforeLogin v-show="(!isLogin && $route.path !== '/login')"></BeforeLogin>
        <router-view class="p-3 flex-grow-1"></router-view>
        <SpinnerCom v-show="showSpin"></SpinnerCom>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import SidebarComponent from "./components/SidebarCom.vue";
import SpinnerCom from "./components/SpinnerCom.vue";
import BeforeLogin from "./components/BeforeLogin.vue";
export default {
  name: "App",
  components: { 
    SidebarComponent, 
    SpinnerCom,
    BeforeLogin,
  },
  computed: {
    showSpin() {
      return this.$store.state.showSpinner;
    },
    isLogin(){
      return this.$store.state.isLogin;
    }
  },
};
</script>
