<template>
  <div class="my-4 md:absolute right-10 top-20 flex justify-center">
    <MealsDropdown :selected-plan="selectedPlan" />
  </div>
  <div class="absolute bg-indigo-600 lg:absolute right-0 bottom-0 z-0">
    <img
      class="w-full h-full object-cover opacity-50"
      src="https://dl.dropboxusercontent.com/s/343w3ya3qo391r3/undraw_Stability_ball_b4ia.png"
      alt="Support team"
    />
  </div>
  <div class="p-4">
    <div v-if="dataloaded" class="flex flex-wrap justify-between">
      <!-- <div>{{ Object.keys(meals[selectedDay]) }}</div> -->
      <div v-for="mealType in mealTypes" :key="mealType">
        <MealCard :meal="meals[selectedDay][mealType]" :meal-type="mealType" />
      </div>
      <!-- <MealCard :meal="meals[selectedDay].breakfast" />
      <MealCard :meal="meals[selectedDay]['dinner']" /> -->
      <!-- <div v-for="meal in meals" :key="meal">{{ Object.keys(meal) }}</div> -->
    </div>
    <!-- <div  class="absolute bottom-0 p-10 bg-gray-300 w-screen h-1/2 overflow-scroll"><MealCard :meal="meals[selectedDay]['breakfast']" :meal-type="'dinner'" /></div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import MealCard from "./MealCard.vue";
import MealsDropdown from "./MealsDropdown.vue";
import { provide } from "@vue/runtime-core";
// const hadewUrl = "https://api.hadew.com";
const mealTypes = [
  "breakfast",
  "morning_snack",
  "lunch",
  "afternoon_snack",
  "dinner",
  "evening_snack",
];
export default {
  setup() {
    const meals = ref({});
    const totalPlans = ref({});
    const dataloaded = ref(false);
    const selectedDay = ref(Math.round(Math.random() * 7));
    console.log(selectedDay.value);
    const selectedPlan = ref(0);
    const setPlan = (planId) => {
      selectedPlan.value = planId;
      meals.value = totalPlans.value[planId].data.daily_meals;
    };
    provide("setPlan", setPlan);

    fetch(
      "https://raw.githubusercontent.com/samarsheikh001/samarsheikh001.github.io/main/dietplan_host/data/meals.json"
    ).then((res) =>
      res.json().then((response) => {
        totalPlans.value = response;
        meals.value = response[0].data.daily_meals;
        dataloaded.value = true;
      })
    );
    return { meals, dataloaded, selectedDay, mealTypes, selectedPlan };
  },
  components: { MealCard, MealsDropdown },
};
</script>
