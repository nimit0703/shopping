import Product from "@/interface/Product";
import _ from "lodash";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const isLogin = localStorage.getItem("isLogin")
  ? JSON.parse(_.toString(localStorage.getItem("isLogin")))
  : false;
const thisUser = localStorage.getItem("thisUser")
  ? JSON.parse(_.toString(localStorage.getItem("thisUser")))
  : {};
const users = localStorage.getItem("users")
  ? JSON.parse(_.toString(localStorage.getItem("users")))
  : [];
const cart = localStorage.getItem("cart")
  ? JSON.parse(_.toString(localStorage.getItem("cart")))
  : {};
const store = new Vuex.Store({
  state: {
    showSpinner: false,
    isLogin: isLogin,
    thisUser: thisUser,
    users: users,
    products: [
      {
        id: 1,
        name: "Laptop",
        desc: "High-performance laptop with the latest processor.",
        amount: 1,
        price: 1500,
        image: "laptop-image.jpg",
      },
      {
        id: 2,
        name: "Smartphone",
        desc: "Cutting-edge smartphone with a stunning display.",
        amount: 1,
        price: 1000,
        image: "smartphone-image.jpg",
      },
      {
        id: 3,
        name: "Headphones",
        desc: "Premium noise-canceling headphones for immersive sound.",
        amount: 1,
        price: 300,
        image: "headphones-image.jpg",
      },
      {
        id: 4,
        name: "Digital Camera",
        desc: "Professional-grade digital camera for capturing memories.",
        amount: 1,
        price: 2000,
        image: "camera-image.jpg",
      },
      {
        id: 5,
        name: "Smartwatch",
        desc: "Sleek smartwatch with health tracking and notifications.",
        amount: 1,
        price: 500,
        image: "smartwatch-image.jpg",
      },
      {
        id: 6,
        name: "Wireless Earbuds",
        desc: "True wireless earbuds with long battery life and crystal-clear audio.",
        amount: 1,
        price: 150,
        image: "earbuds-image.jpg",
      },
      {
        id: 7,
        name: "4K TV",
        desc: "Large 4K TV with vibrant colors and smart features.",
        amount: 1,
        price: 1200,
        image: "tv-image.jpg",
      },
      {
        id: 8,
        name: "Gaming Console",
        desc: "Powerful gaming console for immersive gaming experiences.",
        amount: 1,
        price: 400,
        image: "console-image.jpg",
      },
      {
        id: 9,
        name: "Tablet",
        desc: "Versatile tablet for work, entertainment, and creativity.",
        amount: 1,
        price: 800,
        image: "tablet-image.jpg",
      },
      {
        id: 10,
        name: "Coffee Maker",
        desc: "High-quality coffee maker for the perfect morning brew.",
        amount: 1,
        price: 100,
        image: "coffee-maker-image.jpg",
      },
    ],
    cart: cart,
  },
  mutations: {
    setSpinnerVisibility(state, show) {
      state.showSpinner = show;
    },
    setLogin(state, value: boolean) {
      state.isLogin = value;
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
    setToCart(state, item) {
      const userId = state.thisUser.id;
      if (!state.cart[userId]) {
        state.cart[userId] = [];
      }
      const userCart = state.cart[userId];

      const existingItem = userCart.find(
        (cartItem: Product) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        // If the item doesn't exist, push the entire item to the cart
        userCart.push(item);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartItemAmount(state, { id, amount }) {
      const userId = state.thisUser.id;
      const userCart = state.cart[userId];
      const cartItem = userCart.find((cartItem: Product) => cartItem.id === id);

      if (cartItem) {
        cartItem.amount = amount;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    setNewUser(state, { name, email, password }) {
      const id = _.size(state.users);
      const img = `https://picsum.photos/600/300/?image=3${id}`
      const newUser = {
        id,
        name,
        email,
        password,
        img,
      };
      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
    setThisUserByEmail(state, emailId) {
      if (state.isLogin) {
        const user = _.find(state.users, { email: emailId });
        state.thisUser = user;
        localStorage.setItem("thisUser", JSON.stringify(state.thisUser));
      }
    },
    clearCart(state) {
      const userId = state.thisUser.id;
      delete state.cart[userId];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  getters: {
    getCartItemById: (state) => (id: number) => {
      const userId = state.thisUser.id;
      const userCart = state.cart[userId];
      return userCart.find((cartItem: Product) => cartItem.id === id);
    },
    getPassword: (state) => (userEmail: string) => {
      const user = _.find(state.users, { email: userEmail });
      return user?.password;
    },
  },
});

export default store;
