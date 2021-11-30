<template>
  <div :class="full">
    <base-progress-bar></base-progress-bar>
    <transition
      ><component @nextStep="nextStep" :is="step"></component
    ></transition>
  </div>
</template>

<script>
import BodyType from "../components/StartMaleplan/BodyType.vue";
import LastTimeGoalWeight from "../components/StartMaleplan/LastTimeGoalWeight.vue";
import NegativeBehaviour from "../components/StartMaleplan/NegativeBehaviour.vue";
import SetAge from "../components/StartMaleplan/SetAge.vue";
import SetWeight from "../components/StartMaleplan/GoalWeight.vue";
import TargetAchieve from "../components/StartScreen/TargetAchieve.vue";
import UsualActivity from "../components/StartMaleplan/UsualActivity.vue";
import YourMetric from "../components/StartMaleplan/YourMetric.vue";

import BaseProgressBar from "../components/UI/BaseProgressBar.vue";

export default {
  components: {
    BaseProgressBar,
    TargetAchieve,
    SetWeight,
    YourMetric,
    SetAge,
    BodyType,
    UsualActivity,
    LastTimeGoalWeight,
    NegativeBehaviour,
  },
  data() {
    return {
      full: "h-full flex flex-col justify-center items-center",
      step: "target-achieve",
      // step: "your-metric",
    };
  },
  methods: {
    nextStep({ option, jumpTo }) {
      console.log(jumpTo, option);
      this.step = jumpTo;
    },
  },
};
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
  transform: translateX(-300px);
}

.v-enter-active {
  transition: all 0.3s ease-out 0.3s;
}

.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.v-leave-from {
  /* opacity: 1; */
  transform: translateX(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>