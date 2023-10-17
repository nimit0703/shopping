<template>
  <div>
    <h1></h1>
  </div>
</template>

<script lang="ts">

import _ from 'lodash';
export default {
  beforeDestroy() {
    console.log("beforeDestroyy :: AddData");

    const debouncedSpinner = _.debounce(() => {
      this.$store.commit("setSpinnerVisibility", false);
    }, 700);

    this.$store.commit("setSpinnerVisibility", true);

    debouncedSpinner();
  },
};
</script>
