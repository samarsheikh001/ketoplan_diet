<template>
  <!-- <div class="m-10">
    <div>{{ Object.keys(meal) }}</div>
  </div> -->
  <div
    class="md:w-screen max-w-xl shadow m-4 card rounded-lg overflow-hidden flex flex-col md:flex-row"
  >
    <div class="w-full md:w-2/5 h-80">
      <img
        class="object-center object-cover sm:w-full sm:h-full"
        :src="hadewUrl + meal.image[0].url"
        alt="photo"
      />
    </div>
    <div
      class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2 h-80 overflow-scroll"
    >
      <p class="text-xl text-gray-700 font-bold">{{ meal.title }}</p>
      <p class="text-gray-400 font-normal" :class="mealTypeClass">
        {{ getMealType }}
      </p>
      <!-- <button class="bg-green-500 text-sm font-normal text-white p-2 rounded">
        Get Details
      </button> -->
      <p class="leading-relaxed text-gray-500 overflow-scroll">
        {{ meal.prep }}
      </p>
    </div>
  </div>
</template>

<script>
const hadewUrl = "https://api.hadew.com";
export default {
  props: ["meal", "mealType"],
  setup(props) {
    return {
      props,
      hadewUrl,
    };
  },
  computed: {
    getMealType() {
      switch (this.mealType) {
        case "breakfast":
          return "Breakfast";
        case "morning_snack":
          return "Morning Snack";
        case "lunch":
          return "Lunch";
        case "afternoon_snack":
          return "Afternoon Snack";
        case "dinner":
          return "Dinner";
        case "evening_snack":
          return "Evening Snack";
        default:
          return this.mealType;
      }
    },
    mealTypeClass() {
      switch (this.mealType) {
        case "breakfast":
          return "text-green-500 bg-green-200 inline";
        case "morning_snack":
          return "text-yellow-500 bg-yellow-200 inline";
        case "lunch":
          return "text-blue-500 bg-blue-200 inline";
        case "afternoon_snack":
          return "text-purple-500 bg-purple-200 inline";
        case "dinner":
          return "text-gray-500 bg-gray-200 inline";

        case "evening_snack":
          return "text-pink-500 bg-pink-200 inline";

        default:
          return "text-green-500 bg-green-200 inline";
      }
    },
  },
};
</script>

<style scoped>
.card {
  backdrop-filter: blur(15px);
}
</style>
