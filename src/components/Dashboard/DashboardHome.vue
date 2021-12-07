<template>
  <div class="md:p-8 overflow-scroll">
    <!-- QUOTE -->
    <div class="quote-container">
      <div class="quote">
        Your body hears everything your mind says.
      </div>
      <div class="text-right font-bold">- Naomi Judd</div>
    </div>
    <!-- MAIN -->
    <div class="lg:flex p-4 my-2 rounded justify-around">
      <div class="max-w-xs py-4 md:w-screen">
        <h1 class="max-w-xs text-left font-bold text-xl text-gray-500">
          Hi <span class="text-2xl text-black">{{ username }}</span
          >, time to log weight.
        </h1>
        <!-- LOG WEIGHT -->
        <div class="flex">
          <div class="log-counter__input">
            <button @click="weightSet(-1)" class="log-counter__input-btn">
              -
            </button>
            <div class="log-counter__field flex">
              <div
                @click="decimalActive = false"
                :class="{ active: !decimalActive }"
                class="log-counter__field-number"
              >
                {{ Math.floor(weight) }}
              </div>
              <div class="log-counter__field-dot">.</div>
              <div
                @click="decimalActive = true"
                :class="{ active: decimalActive }"
                class="log-counter__field-number"
              >
                {{
                  weight
                    .toFixed(1)
                    .toString()
                    .split(".")[1]
                }}
              </div>
            </div>
            <button @click="weightSet(1)" class="log-counter__input-btn">
              +
            </button>
          </div>
          <button class="px-6 bg-black text-white rounded-full m-1">
            Log
          </button>
        </div>
        <!-- LOG WEIGHT END -->
      </div>
      <!-- LOG WEIGHT MAIN END -->
      <div class="bg-gray-100">
        <DashboardCalorieCounter />
      </div>
    </div>
    <!-- MAIN END -->
  </div>
</template>

<script>
import { auth } from "@/firebase.js";
import DashboardCalorieCounter from "./DashboardCalorieCounter.vue";
export default {
  mounted() {
    console.log(auth.currentUser.displayName == null);
    if (auth.currentUser.displayName == null) this.username = "username";
    else this.username = auth.currentUser.displayName;
  },
  data() {
    return {
      username: "user",
      weight: 76.9,
      decimalActive: true,
    };
  },
  methods: {
    weightSet(num) {
      if (this.decimalActive) this.weight += parseFloat((num / 10).toFixed(2));
      else this.weight += num;
    },
  },
  components: { DashboardCalorieCounter },
};
</script>

<style scoped>
.log-counter__input {
  @apply border flex items-center rounded-full my-2 px-4 py-2;
}
.log-counter__input-btn {
  @apply w-12 h-12 rounded-full text-2xl hover:bg-gray-200 font-bold;
}
.log-counter__field-number {
  @apply text-gray-600;
}

.active {
  @apply text-xl font-bold;
}

.quote-container {
  @apply bg-gray-100 rounded p-2 shadow border-l-4 border-black;
}
</style>
