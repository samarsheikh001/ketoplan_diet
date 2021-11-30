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
      @click="setPhysicalActivity(option.value)"
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
          img: "http://fitbyeat.com/img/basic-male-img-1.png"
        },
        {
          value: "Gain Weight",
          img: "http://fitbyeat.com/img/basic-male-img-2.png"
        },
        {
          value: "Develop Healthy Habits",
          img: "http://fitbyeat.com/img/basic-male-img-3.png"
        },
      ],
    };
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