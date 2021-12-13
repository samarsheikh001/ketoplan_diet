<template>
  <div>
    <h1 class="font-bold text-2xl py-4 pb-8">Personal Summary</h1>
    <div class="md:flex w-full justify-center space-y-4">
      <div
        class="max-w-lg flex flex-col md:text-2xl text-lg font-bold flex-1 m-2 rounded-xl shadow-xl backdrop-blur backdrop-filter"
      >
        <div
          class="flex justify-between items-center p-2  flex-1 rounded-t-xl"
          :class="{ 'bg-gray-200': healthCondition == 'Overweight' }"
        >
          <div>Overweight</div>
          <div v-if="healthCondition == 'Overweight'">
            {{ Math.floor(BMI) }} BMI
          </div>
        </div>
        <div
          class="flex justify-between items-center p-2 flex-1"
          :class="{ 'bg-gray-200': healthCondition == 'Normal' }"
        >
          <div>Normal</div>
          <div v-if="healthCondition == 'Normal'">
            {{ Math.floor(BMI) }} BMI
          </div>
        </div>
        <div class="flex justify-between items-center p-2 flex-1 rounded-b-xl"
        :class="{ 'bg-gray-200': healthCondition == 'Underweight' }">
          <div>Underweight</div>
          <div v-if="healthCondition == 'Underweight'">
            {{ Math.floor(BMI) }} BMI
          </div>
        </div>
      </div>
      <div
        class="max-w-lg flex-1 m-2 p-2 rounded-xl shadow-xl backdrop-blur backdrop-filter"
      >
        <h1 class="font-bold text-xl">Daily calorie intake</h1>
        <h2 class="text-red-500 text-lg font-bold">
          {{ dailyCaloriesNeed }} approx
        </h2>
        <h3>kCal</h3>
        <img
          class=""
          src="https://static.ketocycle.diet/images/daily-calorie.png"
          alt=""
        />
      </div>
    </div>

    <div class="md:flex w-full justify-center space-y-4">
      <div
        class="max-w-lg flex-1 m-2 p-2 rounded-xl shadow-xl backdrop-blur backdrop-filter"
      >
        <h1 class="font-bold text-xl">Body change estimations</h1>
        <img
          class=""
          src="https://static.ketocycle.diet/images/body-change-estimations.png"
          alt=""
        />
      </div>
      <div
        class="max-w-lg flex-1 m-2 p-2 rounded-xl shadow-xl backdrop-blur backdrop-filter"
      >
        <h1 class="font-bold text-xl py-1">
          Hundreds of Unique food variations for you
        </h1>
        <div class="flex items-center justify-around">
          <img
            class="p-1"
            src="https://static.ketocycle.diet/images/unique-recipes.png"
            alt=""
          />
          <h2 class="text-5xl text-red-500">1600+</h2>
        </div>
      </div>
    </div>
    <div class="grid justify-center">
      <BaseButton @click="gotoEmailCard" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "./UI/BaseButton.vue";
export default {
  components: { BaseButton },
  mounted() {
    this.calculateCalorie();
  },
  data() {
    return {
      BMI: 0,
      dailyCaloriesNeed: 0,
    };
  },
  computed: {
    ...mapState("dietplan", [
      "userInputAge",
      "isImperial",
      "gender",
      "heightInFeet",
      "heightInInches",
      "heightInCms",
      "weightInLb",
      "weightInKg",
    ]),
    healthCondition() {
      if (this.BMI < 18.5) return "Underweight";
      else if (this.BMI < 24.9) return "Normal Weight";
      else return "Overweight";
    },
  },
  methods: {
    gotoEmailCard() {
      this.$router.push("step-10");
    },
    calculateCalorie() {
      const weightInKilograms = this.isImperial
        ? this.weightInLb / 2
        : this.weightInKg;
      const heightInCentimeters = this.isImperial
        ? (this.heightInFeet * 12 + this.heightInInches) * 2.54
        : this.heightInCms;
      this.BMI =
        (weightInKilograms / heightInCentimeters / heightInCentimeters) * 10000;

      const A = 10 * weightInKilograms;
      const B = 6.25 * heightInCentimeters;
      const C = 5 * this.userInputAge;
      let BMR;
      if (this.gender == "male") {
        BMR = A + B - C + 5;
      } else {
        BMR = A + B - C - 161;
      }
      this.dailyCaloriesNeed = BMR * 1.5;
      // Underweight = <18.5
      // Normal weight = 18.5–24.9
      // Overweight = 25–29.9
      // Obesity = BMI of 30 or greater
    },
  },
};
</script>
