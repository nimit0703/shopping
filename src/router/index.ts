import CartViewVue from "../views/CartView.vue";
import CheckoutVue from "../views/Checkout.vue";
import HomeViewVue from "../views/HomeView.vue";
import LoginViewVue from "../views/LoginView.vue";
import LogoutViewVue from "../views/LogoutView.vue";
import ProductsViewVue from "../views/ProductsView.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: HomeViewVue },
  { path: "/login", name: "login", component: LoginViewVue },
  { path: "/logout", name: "logout", component: LogoutViewVue },
  { path: "/products", name: "products", component: ProductsViewVue },
  { path: "/cart", name: "cart", component: CartViewVue },
  { path: "/checkout", name: "checkout", component: CheckoutVue },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
