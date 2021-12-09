<template>
  <base-card-slot>
    <base-card-head
      head="Lose Weight"
      question="Do you want to lose weight or Gain weight?"
    ></base-card-head>
    <base-card-option
      v-for="(option, index) in gainOrLoseOptions"
      :key="option.value"
      :cardClass="index"
      :value="option.value"
      :optionImg="option.img"
      customAddonClass="px-2"
      imgWidth="w-16"
      @click="setWeightGoal(option.value)"
    ></base-card-option>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";

export default {
  components: { BaseCardHead, BaseCardSlot, BaseCardOption },
  data() {
    return {
      gainOrLoseOptions: [
        {
          value: "Lose Weight",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/basic-female-img-1.png",
        },
        {
          value: "Gain Weight",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/basic-female-img-2.png",
        },
        {
          value: "Develop Healthy Habits",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/basic-female-img-3.png",
        },
      ],
    };
  },
  methods: {
    setWeightGoal(value) {
      this.$store.commit("dietplan/setWeightGoal", value);
      this.$router.push("step-2");
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
