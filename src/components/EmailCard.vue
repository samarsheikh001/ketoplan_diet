<template>
  <div>
    <div class="py-8">
      <div class="relative sm:py-16">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div
            class="relative rounded-2xl px-6 py-10 overflow-hidden shadow-xl sm:px-12 sm:py-20  bg-blur"
          >
            <div class="relative">
              <div class="sm:text-center">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Get your personalized Diet Plan immediately!
                </h2>
                <p class="mt-6 mx-auto max-w-2xl text-lg">
                  We don't share any personal information.
                  <!-- We'll email you a
                  copy of your results for convenient access -->
                </p>
              </div>
              <form
                @submit.prevent="setData"
                class="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
              >
                <div class="min-w-0 flex-1">
                  <label for="cta-email" class="sr-only">Email address</label>
                  <input
                    id="cta-email"
                    v-model="email"
                    type="email"
                    class="block w-full border border-gray-500 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ring-gray-700"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    class="block w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-white bg-black shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showingProgress: true,
      email: "",
    };
  },
  methods: {
    async setData() {
      this.$store.commit("dietplan/setEmail", this.email);
      this.$router.push("step-11");
    },
  },
  components: {
  },
};
</script>

<style scoped>
button {
  background: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
  background-size: 200% auto;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  background-position: 100% center;
}
.bg-blur {
  backdrop-filter: blur(20px);
}
</style>
