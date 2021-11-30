<template>
  <div class="bg-whit w-full h-full overflow-scroll">
    <div class="md:w-1/2 w-full">
      <div class="text-2xl m-4 border-b border-black pb-4">
        Meal of the day
      </div>
    </div>
    <MealsDaily />
  </div>
</template>

<script>
// import MealsDropdown from "./MealsDropdown.vue";
import MealsDaily from "./MealsDaily.vue";
export default {
  components: {
    // MealsDropdown,
    MealsDaily,
  },
};
</script>
