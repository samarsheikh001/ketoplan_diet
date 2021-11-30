<template>
  <base-card-slot>
    <base-card-head
      head="Body Type"
      question="Your body type determines your metabolism rate."
    ></base-card-head>
    <base-card-option
      @click="setBodyType(option.value)"
      v-for="(option, index) in bodytypeOptions"
      :key="option.value"
      :cardClass="index"
      :optionImg="option.img"
      :value="option.value"
    ></base-card-option>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  components: { BaseCardSlot, BaseCardHead, BaseCardOption },
  name: "BodyType",
  data() {
    return {
      bodytypeOptions: [
        {
          value: "Ectomorph",
          img: "http://fitbyeat.com/img/basic-male-img-1.png",
        },
        {
          value: "Mesomorph",
          img: "http://fitbyeat.com/img/basic-male-img-2.png",
        },
        {
          value: "Endomorph",
          img: "http://fitbyeat.com/img/basic-male-img-3.png",
        },
      ],
    };
  },
  emits: ["nextStep"],
  methods: {
    setBodyType(value) {
      this.$store.commit("dietplan/setBodyType", value);
      this.$router.push("step-3");
    },
  },
};
</script>
