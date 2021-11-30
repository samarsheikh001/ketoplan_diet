import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n.js";
import "./index.css";
import router from "./router";
import store from "./store";
import VueObserveVisibility from 'vue-observe-visibility'

createApp(App)
  .use(store)
  .use(VueObserveVisibility)
  .use(router)
  .use(i18n)
  .mount("#app");

