<template>
  <div
    class="bg-black cursor-pointer w-52 z-10 rounded"
    @click="dropdownActive = !dropdownActive"
  >
    <div class="py-2 text-white">
      <span>{{ selectedOption }}</span>
      <span class="transform rotate-90">
        <ArrowDownIcon
          class="w-6 h-6 inline-flex transform p-1 mx-2 transition ease-in"
          :class="{ 'rotate-180': dropdownActive }"
        />
      </span>
    </div>
    <div
      class="text-gray-200 absolute bg-black  w-52"
      :class="{ hidden: !dropdownActive }"
    >
      <ul>
        <li
          v-for="option in unselectedOption"
          :key="option"
          class="py-6"
          @click="setPlan(listDropdownOptions.indexOf(option))"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ArrowDownIcon } from "@heroicons/vue/solid";
export default {
  components: { ArrowDownIcon },
  props: ["selectedPlan"],
  data() {
    return {
      dropdownActive: false,
      listDropdownOptions: [
        "Keto Meal Plan",
        "Vegan Meal Plan",
        "Flexitarian Meal Plan",
        "Mediterranean Meal Plan",
      ],
    };
  },
  inject: ["setPlan"],
  computed: {
    selectedOption() {
      return this.listDropdownOptions[this.selectedPlan];
    },
    unselectedOption() {
      return this.listDropdownOptions.filter((e) => e != this.selectedOption);
    },
  },
};
</script>
