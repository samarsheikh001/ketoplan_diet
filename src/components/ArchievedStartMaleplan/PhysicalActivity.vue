<template>
  <base-card-slot>
    <base-card-head
      head="Physical Activity"
      question="As a man who wants to gain weight, your physical activity plays a major role"
      tailQue="How physically active are you?"
    ></base-card-head>
    <div class="grid-container">
      <base-card-option
        v-for="(option, index) in physicalActivityOptions"
        :key="option.value"
        :cardClass="index"
        :value="option.value"
        :optionImg="option.img"
        imgWidth="sm:w-1/2 w-1/4"
        customAddonClass="px-2"
        @click="setPhysicalActivity(option.value)"
      ></base-card-option>
    </div>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  components: { BaseCardHead, BaseCardSlot, BaseCardOption },
  name: "PhysicalActivity",
  data() {
    return {
      physicalActivityOptions: [
        {
          value: "Hardly at all",
          img: "http://fitbyeat.com/img/type-day-male-img-1.png",
        },
        {
          value: "Fitness 1-2 times a day",
          img: "http://fitbyeat.com/img/type-day-male-img-2.png",
        },
        {
          value: "Fitness 1-2 times a week",
          img: "http://fitbyeat.com/img/type-day-male-img-3.png",
        },
        {
          value: "Fitness 5-7 times a week",
          img: "http://fitbyeat.com/img/type-day-male-img-4.png",
        },
      ],
    };
  },
  methods: {
    setPhysicalActivity(value) {
      this.$store.commit("dietplan/setPhysicalActivity", { value });
      this.$router.push("step-2");
    },
  },
};
</script>