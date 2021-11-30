<template>
  <base-card-slot>
    <base-card-head
      head="Target"
      question=" Well-balanced nutrition provides multiple health benefits. We will focus
      on the one most important to you."
      tail-que="What would you like achieve ?"
    ></base-card-head>
    <base-card-option
      v-for="(option,index) in options"
      :key="option.value"
      :cardClass="index"
      :value="option.value"
      :optionImg="option.img"
      @click="setTarget(option.value)"
    ></base-card-option
  ></base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";

export default {
  components: { BaseCardHead, BaseCardOption, BaseCardSlot },
  name: "TargetAchieve",
  data() {
    return {
      options: [
        {
          value: "Lose Weight",
          img: "http://fitbyeat.com/img/basic-male-img-1.png",
          class: "card-1",
        },
        {
          value: "Gain Muscle",
          img: "http://fitbyeat.com/img/basic-male-img-2.png",
          class: "card-2",
        },
        {
          value: "Develop Healthy Habits",
          img: "http://fitbyeat.com/img/basic-male-img-3.png",
          class: "card-3",
        },
      ],
    };
  },
  methods: {
    setTarget(value) {
      this.$store.commit("dietplan/setTargetAchieve", { value });
      this.$router.push("/male/step-2");
    },
  },
};
</script>
