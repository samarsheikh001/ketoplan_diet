<template>
  <base-card-slot>
    <base-card-head
      head="Usual Activity"
      question="Got it! To reach their goal, men in their 20s who want to get fit need a
        customized method based on their habits and customs."
      tailQue="What does your typical day look like?"
    ></base-card-head>
    <!-- GRID CONTAINER -->
    <div class="grid-container">
      <base-card-option
        v-for="(activityOption, index) in activityOptions"
        @click="setUsualActivity(activityOption.value)"
        :key="activityOption.value"
        :cardClass="index"
        :optionImg="activityOption.img"
        :value="activityOption.value"
        imgWidth="sm:w-1/2 w-1/4"
        customAddonClass="px-2"
      >
      </base-card-option>
    </div>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  components: { BaseCardSlot, BaseCardHead, BaseCardOption },
  name: "UsualActivity",
  data() {
    return {
      activityOptions: [
        {
          value: "At the office",
          img: "https://samarsheikh001.github.io/dietplan_host/img/type-day-female-img-1.png",
        },
        {
          value: "Daily long walks",
          img: "https://samarsheikh001.github.io/dietplan_host/img/type-day-female-img-2.png",
        },
        {
          value: "Physical Work",
          img: "https://samarsheikh001.github.io/dietplan_host/img/type-day-female-img-3.png",
        },
        {
          value: "Mostly at home",
          img: "https://samarsheikh001.github.io/dietplan_host/img/type-day-female-img-4.png",
        },
      ],
    };
  },
  emits: ["nextStep"],
  methods: {
    setUsualActivity(value) {
      this.$store.commit("dietplan/setUsualActivity", value);
      this.$router.push("step-6");
    },
  },
};
</script>
