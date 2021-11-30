import { createStore } from "vuex";

import dietPlanModule from "./modules/dietplan";
import authModule from "./modules/auth";

export default createStore({
  state() {
    return {
    };
  },
  mutations: {},
  actions: {
   
  },
  modules: {
    dietplan: dietPlanModule,
    auth: authModule,
  },
});
