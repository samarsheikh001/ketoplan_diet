<template>
  <base-card-slot>
    <base-card-head
      head="Last Time goal weight"
      question="Let's move on! When was the last time you were at your ideal weight?
    "
    ></base-card-head>
    <div class="grid-container">
      <BaseCardOption
        v-for="(option, index) in lastTimeOptions"
        @click="setLastTimeGoalWeight(option.value)"
        :key="option.value"
        :cardClass="index"
        :value="option.value"
        imgWidth="w-0"
        customAddonClass="p-4"
      />
    </div>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  components: { BaseCardHead, BaseCardSlot, BaseCardOption },
  name: "LastTimeGoalWeight",
  data() {
    return {
      lastTimeOptions: [
        { value: "Less than a year", card: "card-1" },
        { value: "1 to 2 years ago", card: "card-2" },
        { value: "More than 3 years ago", card: "card-3" },
        { value: "Never", card: "card-4" },
      ],
    };
  },
  emits: ["nextStep"],
  methods: {
    setLastTimeGoalWeight(value) {
      this.$store.commit("dietplan/setLastTimeGoalWeight", { value });
      this.$router.push("step-8");
    },
  },
};
</script>