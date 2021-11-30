<template>
  <base-card-slot>
    <base-card-head
      head="Hydration"
      question="Getting enough sleep is essential for your well-being and getting in the best shape!"
    ></base-card-head>
    <base-card-option
      v-for="(option, index) in restOptions"
      :key="option.value"
      :cardClass="index"
      :value="option.value"
      @click="setRest(option.value)"
    ></base-card-option>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  components: { BaseCardHead, BaseCardSlot, BaseCardOption },
  name: "Rest",
  data() {
    return {
      restOptions: [
        {
          value: "Minimal rest (less than 5 hours)",
        },
        {
          value: "I get some shut-eye (5-6 hours)",
        },
        {
          value: "I sleep long and well (7-8 hours)",
        },
         {
          value: "I'm a sleep superhero (more than 8 hours)",
        },
      ],
    };
  },
  methods: {
    setRest(value) {
      this.$store.commit("dietplan/setRest", { value });
      this.$router.push("step-12");
    },
  },
};
</script>