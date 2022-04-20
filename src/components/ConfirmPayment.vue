<template>
  <div class="bg-gray-50 m-auto text-center w-full mt-10">
    <div
      class="max-w-4xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Checkout</h2>

      <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">
              Contact information
            </h2>

            <div class="mt-4">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  :value="route.query.email"
                  type="email"
                  disabled
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Order summary -->
          <div class="mt-10 lg:mt-0">
            <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

            <div
              class="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 class="sr-only">Items in your cart</h3>
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  v-for="product in products"
                  :key="product.id"
                  class="flex py-6 px-4 sm:px-6"
                >
                  <div class="flex-shrink-0">
                    <img
                      src="../assets/img/dietician-board.jpg"
                      :alt="product.imageAlt"
                      class="w-20 rounded-md"
                    />
                  </div>

                  <div class="ml-6 flex-1 flex flex-col">
                    <div class="flex">
                      <div class="min-w-0 flex-1">
                        <h4 class="text-sm">
                          <a
                            :href="product.href"
                            class="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {{ product.title }}
                          </a>
                        </h4>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ product.desc }}
                        </p>
                      </div>
                    </div>

                    <div class="flex-1 pt-2 flex items-end justify-between">
                      <p class="mt-1 text-sm font-medium text-gray-900">
                        {{ product.price }}
                      </p>

                      <div class="ml-4">
                        <label for="quantity" class="sr-only">Quantity</label>
                        <select
                          v-model="quantity"
                          id="quantity"
                          name="quantity"
                          class="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        <span class="ml-2">weeks</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <dl class="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div class="flex items-center justify-between border-gray-200">
                  <dt class="text-base font-medium">
                    Total
                  </dt>
                  <dd class="text-base font-medium text-gray-900">
                    ${{ quantity * 1.99 }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <!-- Payment -->
        <div class="mt-10 border-t border-gray-200 pt-10">
          <h2 class="text-lg font-medium text-gray-900">Payment</h2>
          <form id="payment-form" @submit.prevent="handleSubmit">
            <div id="payment-element" />
            <button
              class="w-full bg-gray-800 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 my-4"
              id="submit"
              :disabled="isLoading"
            >
              Pay now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const products = [
  {
    id: 1,
    title: "Ketodiet plan",
    desc: "2.99$ per week",
  },
];

let stripe;
let elements;

export default {
  components: {},
  setup() {
    const route = useRoute();
    const messages = ref([]);
    const isLoading = ref(false);
    onMounted(async () => {
      const { publishableKey } = await fetch(
        "http://localhost:4242/config"
      ).then((res) => res.json());
      console.log(publishableKey);

      stripe = await loadStripe(publishableKey);
      console.log(stripe);
      const { clientSecret, error: backendError } = await fetch(
        "http://localhost:4242/create-payment-intent"
      ).then((res) => res.json());
      if (backendError) {
        messages.value.push(backendError.message);
      }
      messages.value.push(`Client secret returned.`);

      const appearance = { theme: "stripe" };
      elements = stripe.elements({ clientSecret, appearance });
      const paymentElement = elements.create("payment");
      paymentElement.mount("#payment-element");
      isLoading.value = false;
    });

    const handleSubmit = async () => {
      if (isLoading.value) {
        return;
      }

      isLoading.value = true;

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/register?email=${route.query.email}`,
          receipt_email: "samarsheikh001@gmail.com",
        },
      });

      console.log(error);
      if (error.type === "card_error" || error.type === "validation_error") {
        messages.value.push(error.message);
      } else {
        messages.value.push("An unexpected error occured.");
      }

      isLoading.value = false;
    };

    const quantity = ref(3);
    return {
      products,
      quantity,
      handleSubmit,
      route,
    };
  },
};
</script>
