<template>
  <div>
    <div class="">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Get your personal diet plan
          </h2>
          <p class="mt-4 text-xl text-gray-600">
            If you're not satisfied, contact us within the first 14 days and
            we'll send you a full refund.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 " />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
          >
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                1 months Memberships
              </h3>
              <p class="mt-6 text-base text-gray-500">
                The most popular diet plan.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
                  >
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  role="list"
                  class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                >
                  <li
                    v-for="feature in includedFeatures"
                    :key="feature"
                    class="flex items-start lg:col-span-1"
                  >
                    <div class="flex-shrink-0">
                      <CheckCircleIcon
                        class="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p class="ml-3 text-sm text-gray-700 text-left">
                      {{ feature }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
            >
              <p class="text-lg leading-6 font-medium text-gray-900">
                Launch deal, access for 1 month
              </p>
              <div
                class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
              >
                <span>
                  $15.99
                </span>
              </div>
              <!-- <p class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p> -->
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <!-- <router-link to="step-12"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  >
                    Get Access
                  </router-link > -->
                  <div
                    @click="getAccess(1)"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  >
                    Get Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="">
    <div class="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 " />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
          >
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                3 months Membership
              </h3>
              <p class="mt-6 text-base text-gray-500">
                The most popular diet plan.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
                  >
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  role="list"
                  class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                >
                  <li
                    v-for="feature in includedFeatures"
                    :key="feature"
                    class="flex items-start lg:col-span-1"
                  >
                    <div class="flex-shrink-0">
                      <CheckCircleIcon
                        class="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p class="ml-3 text-sm text-gray-700 text-left">
                      {{ feature }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
            >
              <p class="text-lg leading-6 font-medium text-gray-900">
                Launch deal, access for 3 months for just
              </p>
              <div
                class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
              >
                <span>
                  $30.99
                </span>
              </div>
              <!-- <p class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p> -->
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <!-- <router-link to="step-12"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  >
                    Get Access
                  </router-link > -->
                  <div
                    @click="getAccess(3)"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  >
                    Get Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="">
    <div class="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 " />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
          >
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                6 months Membership
              </h3>
              <p class="mt-6 text-base text-gray-500">
                The most popular diet plan.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
                  >
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  role="list"
                  class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                >
                  <li
                    v-for="feature in includedFeatures"
                    :key="feature"
                    class="flex items-start lg:col-span-1"
                  >
                    <div class="flex-shrink-0">
                      <CheckCircleIcon
                        class="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p class="ml-3 text-sm text-gray-700 text-left">
                      {{ feature }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
            >
              <p class="text-lg leading-6 font-medium text-gray-900">
                Launch deal, access for 6 months for just
              </p>
              <div
                class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
              >
                <span>
                  $45.99
                </span>
              
              </div>
              <!-- <p class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p> -->
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <!-- <router-link to="step-12"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  >
                    Get Access
                  </router-link > -->
                  <div
                    @click="getAccess(6)"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  >
                    Get Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { setUserData } from "../firebase.js";

const includedFeatures = [
  "A personalized Keto meal plan",
  "Keto snacks and desserts",
  "Easy-to-follow recipes",
  " A complete Keto diet guide for beginners",
  "24/7 support",
];

export default {
  components: {
    CheckCircleIcon,
  },
  setup() {
    const store = useStore();
    const router = useRouter()
    console.log(store);
    function getAccess(months) {
      // const response = await fetch(
      //   `https://fitness-stripe-payment.herokuapp.com/checkout/${store.state.dietplan.email}`
      // );
      // const parsedResponse = await response.json();
      // console.log(parsedResponse);
      try {
        setUserData({
          // paymentId: parsedResponse.id,
          ...store.state,
        });
      } catch (error) {
        console.warn(error);
      }

      router.push(`step-12?email=${store.state.dietplan.email}&months=${months}`);

      // window.location.replace(parsedResponse.url);
    }
    return {
      includedFeatures,
      getAccess,
    };
  },
};
</script>
