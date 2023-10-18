<template>
  <div>
    <div class="container text-center">
      <h2>Welcome</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <CardComp
              v-for="product in products"
              :product="product"
              :key="product.id"
              class="col-md-6 mb-4"
            ></CardComp>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 userInfo">
            <img
              :src="userInfo.img"
              class="img-fluid rounded mb-4"
              alt="User Image"
            />
            <div class="d-flex justify-content-between">
              <div class="tags text-black-50">
                <p>Name</p>
                <p>Email</p>
              </div>
              <div class="values text-primary">
                <p>: {{ userInfo.name }}</p>
                <p>: {{ userInfo.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Product from "@/interface/Product";
import CardComp from "../components/CardComp.vue";
import _ from "lodash";
export default {
  data() {
    return {
      products: [] as Product[],
    };
  },
  created() {
    this.products = this.$store.state.products;
  },
  computed:{
    userInfo(){
      return this.$store.state.thisUser
    }
  },
  beforeDestroy() {
    console.log("beforeDestroyy :: AddData");
    const debouncedSpinner = _.debounce(() => {
      this.$store.commit("setSpinnerVisibility", false);
    }, 700);
    this.$store.commit("setSpinnerVisibility", true);
    debouncedSpinner();
  },
  components: { CardComp },
};
</script>

<style scoped>
.userInfo {
  display: flex;
  height: 80vh;
  flex-direction: column;
}

</style>
