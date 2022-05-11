<template>
  <div v-if="$route.query.email" class="min-h-screen flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900 lg:text-left">
            Create your account
          </h2>
        </div>

        <div class="mt-8">
          <div class="mt-6 text-left">
            <form @submit.prevent="createAccount" class="space-y-6">
              <div>
                <div class="block text-sm font-medium text-gray-700">
                  Email address
                </div>
                <div class="mt-1">
                  <div class="sm:text-sm">{{ email }}</div>
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    v-model="password"
                    autocomplete="current-password"
                    min="6"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  />
                </div>
              </div>
              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div class="mt-1">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    v-model="confirmPassword"
                    autocomplete="current-password"
                    min="6"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="text-center">
                <div class="text-sm">
                  <a href="#" class="font-medium text-black">
                    Already got account?
                    <router-link
                      to="login"
                      class="text-pink-500 hover:text-pink-300 font-bold"
                      >Login</router-link
                    >
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-radient focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://dl.dropboxusercontent.com/s/343w3ya3qo391r3/undraw_Stability_ball_b4ia.png"
        alt=""
      />
    </div>
  </div>
  <div v-else class="h-screen grid justify-center items-center">
    <div class="bg-red-100 text-red-500 p-4 rounded shadow">
      You are not permitted to check this page
    </div>
  </div>
  <RegisterDialog
    :isOpen="showDialog"
    :title="title"
    :message="message"
    @close-dialog="toggleDialog"
  />
</template>

<script>
import RegisterDialog from "../components/Register/RegisterDialog.vue";
import { createAccount } from "../firebase.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      message: "Password not matched",
      showDialog: false,
      title: "Error",
      testData: "",
    };
  },
  mounted() {
    this.email = this.$route.query.email;
  },
  methods: {
    async createAccount() {
      if (this.password !== this.confirmPassword) {
        this.toggleDialog();
        return;
      }
      const redirectStatus = this.$route.query.redirect_status;
      if (redirectStatus == "succeeded") {
        const { message, title } = await createAccount(
          this.email,
          this.password
        );
        this.message = message;
        this.title = title;
        console.warn(message);
      } else {
        this.message = "You have not paid yet, complete your payment.";
        this.title = "Failed to Register";
      }
      this.toggleDialog();
    },
    toggleDialog() {
      this.showDialog = !this.showDialog;
    },
  },
  components: {
    RegisterDialog,
  },
};
</script>
