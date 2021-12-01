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
      <p class="text-gray-400 font-normal">{{ mealType }}</p>
      <button class="bg-green-500 text-sm font-normal text-white p-2 rounded">
        Get Details
      </button>
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
};
</script>

<style scoped>
.card {
  backdrop-filter: blur(15px);
}
</style>
