<template>
  <header class="">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none"
      >
        <div class="flex items-center">
          <a href="#">
          
            <!-- Home page : {{ isHomePage }} <br />
            Is Authenticated :
            {{ isAuthenticated }} -->
            <!-- <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt=""
            /> -->
          </a>
        </div>
        <div v-if="isAuthenticated && isHomePage" class="flex">
          <div class="ml-10 space-x-4">
            <router-link
              to="dashboard"
              class="inline-block bg-black mx-1 text-white bg-transparent py-2 px-4 border border-transparent rounded font-medium hover:bg-opacity-75"
              >Dashboard</router-link
            >
          </div>
          <button
            @click="signOut"
            class="inline-block bg-black mx-1 text-white bg-transparent py-2 px-4 border border-transparent rounded font-medium hover:bg-opacity-75"
          >
            SignOut
          </button>
        </div>
        <div v-else>
          <div class="ml-10 space-x-4">
            <router-link
              to="register"
              class="inline-block bg-black mx-1 text-white bg-transparent py-2 px-4 border border-transparent rounded font-medium hover:bg-opacity-75"
              >Register</router-link
            ><router-link
              to="login"
              class="inline-block bg-black mx-1 text-white bg-transparent py-2 px-4 border border-transparent rounded font-medium hover:bg-opacity-75"
              >Login</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { signOutUser } from "../../firebase.js";
// import MealIcon from "../../assets/icons/meals.svg";
export default {
  components: { 
    // MealIcon
     },
  computed: {
    isAuthenticated() {
      return (
        this.$store.state.auth.fbInitialised &&
        this.$store.getters["auth/isAuthenticated"]
      );
    },
    isHomePage() {
      return this.$route.path == "/";
    },
  },
  methods: {
    signOut() {
      signOutUser();
    },
  },
};
</script>
