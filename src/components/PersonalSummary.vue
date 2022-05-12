<template>
  <div v-if="showingProgress">
    <BaseCompletionBar @completed="showingProgress = false" />
  </div>
  <div v-else>
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
        <div
          class="flex justify-between items-center p-2 flex-1 rounded-b-xl"
          :class="{ 'bg-gray-200': healthCondition == 'Underweight' }"
        >
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
          {{ dailyCaloriesNeed.toFixed(2) }} approx
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

    <div class="md:flex w-full justify-center space-y-4">
      <div
        class="max-w-lg flex-1 m-2 p-2 rounded-xl shadow-xl backdrop-blur backdrop-filter flex flex-col justify-center"
      >
        <h1 class="text-xl">Daily Water Requirement</h1>
        <img class="h-32" src="https://myketoplan.co/water.svg" alt="" />
        <div class="text-2xl">
          <span class="text-blue-500">1</span> Liters / day
        </div>
        <p class="text-gray-400 text-sm">(about 4 glasses)</p>
      </div>
      <div
        class="max-w-lg flex-1 m-2 p-2 rounded-xl shadow-xl backdrop-blur backdrop-filter"
      >
        <div class="text-red-500 text-5xl">88%</div>
        <div class="text-xl">
          similar people lost more than 10% of their initial weight on Keto1
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center py-4">
      <img
        class="max-w-md"
        src="https://myketoplan.co/_next/static/images/keto-foods-00e763650c9a21a2324d8eb6cca53b4a.jpg.webp"
        alt=""
      />
      <div class="text-xl font-bold py-2">
        Join Over 45,000 Ketoers Worldwide
      </div>
      <div class="italic font-bold text-2xl">You're in good hands.</div>
      <div>We've successfully worked with clients of all shapes and sizes.</div>
    </div>

    <div class="grid justify-center">
      <BaseButton @click="gotoEmailCard" />
    </div>
    <div class="font-bold">OUR PROMISE</div>
    We believe in a balanced way to lose weight and keep the weight off. We know
    that most of the diets or weight loss programs that you have tried in the
    past don’t work - they are just too hard to follow. Enormous food cravings,
    friends that visit you with a bottle of wine, that freshly baked cheesecake…
    Everything affects your journey and if your diet is not easy-to-follow, you
    are not going to achieve your results. Don’t blame yourself. It’s really
    hard. That’s why our nutritionists and personal coaches work around the
    clock to prepare the most personalized plans you love. We want to make sure
    that it becomes a part of your life. We don’t change habits, we help you to
    improve them. Try it out and we guarantee you will be satisfied.
    <div class="text-left text-black">Head of Nutrition, Fredrick.</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "./UI/BaseButton.vue";
import BaseCompletionBar from "./UI/BaseCompletionBar.vue";

export default {
  components: { BaseButton, BaseCompletionBar },
  mounted() {
    this.calculateCalorie();
  },
  data() {
    return {
      BMI: 0,
      dailyCaloriesNeed: 0,
      showingProgress: true,
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
      console.error("BMI is", this.BMI);
      if (this.BMI < 18.5) return "Underweight";
      else if (this.BMI < 24.9) return "Normal";
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
        ? (this.heightInFeet * 12 + parseFloat(this.heightInInches)) * 2.54
        : this.heightInCms;

      this.BMI =
        (weightInKilograms / heightInCentimeters / heightInCentimeters) * 10000;
      console.warn(this.BMI);
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
