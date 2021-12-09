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
      imgWidth="w-16"
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
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/basic-female-img-1.png",
        },
        {
          value: "Mesomorph",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/basic-female-img-2.png",
        },
        {
          value: "Endomorph",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/basic-female-img-3.png",
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
