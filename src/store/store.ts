import Product from "@/interface/Product";
import User from "@/interface/user";
import _ from "lodash";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showSpinner: false,
    isLogin: false,
    thisUser: {} as User,
    users: [] as User[],
    products: [
      {
        id: 1,
        name: "product 1",
        desc: "product 1 desc ",
        amount: 1,
        price: 1500,
        image: "",
      },
      {
        id: 2,
        name: "product 2",
        desc: "product 2 desc ",
        amount: 1,
        price: 1500,
        image: "",
      },
      {
        id: 3,
        name: "product 3",
        desc: "product 3 desc ",
        amount: 1,
        price: 1500,
        image: "",
      },
      {
        id: 4,
        name: "product 4",
        desc: "product 4 desc ",
        amount: 1,
        price: 1500,
        image: "",
      },
      {
        id: 5,
        name: "product 5",
        desc: "product 5 desc ",
        amount: 1,
        price: 1500,
        image: "",
      },
    ],
    cart: [] as Product[],
  },
  mutations: {
    setSpinnerVisibility(state, show) {
      state.showSpinner = show;
    },
    setTocart(state, item) {
      const existingProduct = _.find(state.cart, { id: item.id });

      if (existingProduct) {
        existingProduct.amount += 1;
      } else {
        state.cart.push(item);
      }
    },
  },
  getters: {},
});

export default store;
