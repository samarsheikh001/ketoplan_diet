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
            <img
              class="h-10 sm:h-16 w-auto"
              src="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=e4252cdefa&attid=0.1&permmsgid=msg-f:1719377305975997518&th=17dc748cd591444e&view=att&disp=safe&realattid=17dc746c361c4cc4b352&saddbat=ANGjdJ_nJ7VGbEvaSi69finjs17n-YxfBF_wlS5Ax6lL8XesUUb4K8vHE4W0Z7o1Qkb2p_xhIwrizt9f1ShxWHWLzxz3t_UIbgyog-kMHoF8hp7fy_zsrFCP9yySRKZ83ZXNQKO-A-OuKri7OeSMpaErXVHfsW3SKMnoCF0ZTucNbugQef63IDkmNoWbE5eacJIrI99Ld4l8EOY8e071rlSMWqT8H1CsmQErfiQCwfp18KRHci2bPeM0WF05IuPKicRrsbl4hPBEd1qZvXFmI_e_JieclrYxfIOg3GCgZfyiOVllYPQOJR7lq5u6pvVNqBC3AF8LTdJ8siWzonVNpE6CGfpA-BNpF6iU6Gh43A9zIiBDQdQU1JDFtKP9PTaI7eXhnulE7gMUTXFZP693VyE6WrUoLX8g7kC03Y-8GYAgyEGF7SGxq5M8N_mARVdxFgqIBXS6HRi3w43fUeFy0NTnPdeS39JusWNkVSItQ98rYQZrhcJY9jS4fQcnErEYf-bTD3Xsz8rIwQN9AVNokdXiKjAIh6INFMnmPHs3VSXmCMIJpQEarwvk8oEJNgGhvVNYrxhoDOq9jYdSMaOp_9v8Xsx-ENYPKgVFk6Vy9wMQLmXjNhiJXvmmibNw14dGjhprDw3vp30OU7OSwf4RqHGieeV8L-vh1B7172evfNimv9WtL2RkTsO1JGMq5Y8"
              alt=""
            />
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
            <!-- <router-link
              to="register"
              class="inline-block bg-black mx-1 text-white bg-transparent py-2 px-4 border border-transparent rounded font-medium hover:bg-opacity-75"
              >Register</router-link
            > -->
            <router-link
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
