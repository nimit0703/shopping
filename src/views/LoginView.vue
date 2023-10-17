<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <span
        :class="{
          'text-primary': formType === 'login',
          'text-secondary': formType !== 'login',
        }"
        class="m-2"
        @click="formType = 'login'"
        >Login</span
      >
      <span class="m-2">|</span>
      <span
        :class="{
          'text-primary': formType === 'signin',
          'text-secondary': formType !== 'signin',
        }"
        class="m-2"
        @click="formType = 'signin'"
        >Sign In</span
      >

    </div>
    <div class="container p-5">
      <LoginFormCom v-show="formType === 'login'" class="p-5"/>
      <SigninFormCom v-show="formType === 'signin'" class="p-5"/>
    </div>
  </div>
</template>


<script lang="ts">
import LoginFormCom from "../components/LoginFormCom.vue";
import SigninFormCom from "../components/SigninFormCom.vue";
import _ from "lodash";
export default {
  data() {
    return {
      formType: "login",
    };
  },
  beforeDestroy() {
    console.log("beforeDestroyy :: AddData");
    const debouncedSpinner = _.debounce(() => {
      this.$store.commit("setSpinnerVisibility", false);
    }, 700);
    this.$store.commit("setSpinnerVisibility", true);
    debouncedSpinner();
  },
  components: { LoginFormCom, SigninFormCom },
};
</script>
