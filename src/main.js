import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n.js";
import "./index.css";
import router from "./router";
import store from "./store";
import VueObserveVisibility from 'vue-observe-visibility'
// import { StripePlugin } from '@vue-stripe/vue-stripe';

// const options = {
//   pk: process.env.STRIPE_PUBLISHABLE_KEY,
//   stripeAccount: process.env.STRIPE_ACCOUNT,
//   apiVersion: process.env.API_VERSION,
//   locale: process.env.LOCALE,
// };
createApp(App)
  .use(store)
  .use(VueObserveVisibility)
  .use(router)
  // .use(StripePlugin)
  .use(i18n)
  .mount("#app");

