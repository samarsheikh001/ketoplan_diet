import { auth } from "@/firebase.js";

export default {
  namespaced: true,
  state() {
    return {
      fbInitialised: false,
      email: "",
    };
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setFbInitialised(state) {
      state.fbInitialised = true;
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.email;
    },
  },
  actions: {
    watchAuth(context) {
      auth.onAuthStateChanged((user) => {
        context.commit("setFbInitialised");
        if (user) {
          context.commit("setEmail", user.email);
        } else {
          context.commit("setEmail", "");
        }
      });
    },
  },
};
