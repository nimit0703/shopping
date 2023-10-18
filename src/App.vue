<template>
  <div>
    <template>
      <div class="d-flex align-items-stretch">
        <SidebarComponent class="border-right"></SidebarComponent>
        <router-view class="p-3 flex-grow-1"></router-view>
        <SpinnerCom v-show="showSpin"></SpinnerCom>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import SidebarComponent from "./components/SidebarCom.vue";
import SpinnerCom from "./components/SpinnerCom.vue";
export default {
  name: "App",
  components: { 
    SidebarComponent, 
    SpinnerCom 
  },
  computed: {
    showSpin() {
      return this.$store.state.showSpinner;
    },
  },
};
</script>
<style scoped>
.hi-100 {
  height: 100vh;
  /* width: 20%; */
}
</style>
