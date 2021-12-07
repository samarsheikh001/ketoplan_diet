<template>
  <div class="max-w-xl">
    <div class="text-left text-sm bg-black text-white p-1">
      Based on the Mifflin-St Jeor equations which are the most accurate daily
      calorie requirement measurements today.
    </div>
    <div class="py-4">
      <form @submit.prevent="calculateCalorie">
        <div class="inline-block">
          <BaseSystemSelect
            @click="isImperial = !isImperial"
            :isImperial="isImperial"
          />
        </div>
        <div class="py-2">
          <h1>Input Age</h1>
          <input
            class="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="number"
            placeholder="age"
            v-model="age"
            required
          />
        </div>
        <div class="py-2">
          <h1>Input weight</h1>
          <input
            class="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="number"
            placeholder="weight"
            v-model="weight"
            required
          />
        </div>
        <div class="py-1">
          <h1>Input height</h1>
          <input
            class="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            type="number"
            placeholder="height"
            v-model="height"
            required
          />
        </div>
        <div class="pt-2">Select Gender</div>
        <div class="flex justify-center items-center space-x-2">
          <input
            type="radio"
            id="one"
            class="text-black"
            value="Male"
            v-model="gender"
            required
          />
          <label for="one">Male</label>
          <input
            type="radio"
            id="two"
            class="text-black"
            value="Female"
            v-model="gender"
            required
          />
          <label for="two">Female</label>
        </div>
        <div class="text-left px-4">
          <div>Pick your activity level</div>
          <div
            v-for="(activity, index) in activityData"
            :key="activity"
            class="py-1 border-b"
          >
            <input
              type="radio"
              :id="'level-' + index"
              class="text-black"
              :value="activity.value"
              v-model="activityValue"
              required
            />
            <label :for="'level-' + index" class="px-1 text-sm">{{
              activity.info
            }}</label>
          </div>
        </div>
        <button
          type="submit"
          class="bg-black text-white px-4 py-2 mt-2 rounded"
        >
          Calculate
        </button>
      </form>
      <div v-if="dailyCaloriesNeed !== 0" class="pt-2 text-left px-2">
        <h1 class="font-bold">What’s Your Goal?</h1>
        You need to take {{ Math.round(dailyCaloriesNeed) }} calories today to
        maintain weight.
        <div class="italic font-bold">
          For 1 pound weight loss per week: <br />
          take no more than {{ Math.round(dailyCaloriesNeed) - 500 }} calories
          per day.
          <span class="hidden">
            Subtract your above number by 500 and plan for this calorie level
            daily. (Why 500? 1 pound equals 3500 calories. If you omit 500
            calories a day from your diet for 7 days, you can lose 1 pound – 500
            calories times 7 days a week equals 3500 calorie which is 1 pound.)
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSystemSelect from "../UI/BaseSystemSelect.vue";
export default {
  data() {
    return {
      isImperial: false,
      weight: "",
      height: "",
      gender: "male",
      activityValue: "",
      age: "",
      dailyCaloriesNeed: 0,
      activityData: [
        {
          info: "sedentary (little or no exercise)",
          value: 1.2,
        },
        {
          info: "lightly active (light exercise/sports 1-3 days/week)",
          value: 1.375,
        },
        {
          info: "moderately active (moderate exercise/sports 3-5 days/week",
          value: 1.55,
        },
        {
          info: "very active (hard exercise/sports 6-7 days a week)",
          value: 1.725,
        },
        {
          info: "extra active (very hard exercise/sports and physical job)",
          value: 1.9,
        },
      ],
    };
  },
  methods: {
    calculateCalorie() {
      const weightInKilograms = this.isImperial ? this.weight / 2 : this.weight;
      const weightInCentimeters = this.isImperial
        ? this.height * 2.54
        : this.height;
      const A = 10 * weightInKilograms;
      const B = 6.25 * weightInCentimeters;
      const C = 5 * this.age;
      let BMR;
      if (this.gender == "male") {
        BMR = A + B - C + 5;
      } else {
        BMR = A + B - C - 161;
      }
      this.dailyCaloriesNeed = BMR * this.activityValue;
    },
  },
  components: { BaseSystemSelect },
};
</script>
