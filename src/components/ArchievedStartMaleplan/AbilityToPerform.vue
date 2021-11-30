<template>
  <base-card-slot>
    <base-card-head
      head="Ability to perform"
      question="Great, just a few more questions.
       How are your energy levels during the day?"
    ></base-card-head>
    <base-card-option
      v-for="(option, index) in abilityToPerformOptions"
      :key="option.value"
      :cardClass="index"
      :value="option.value"
      @click="setAbilityToPerform(option.value)"
    ></base-card-option>
  </base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  components: { BaseCardHead, BaseCardSlot, BaseCardOption },
  name: "AbilityToPerform",
  data() {
    return {
      abilityToPerformOptions: [
        {
          value: "I can maintain a good level all day long",
        },
        {
          value: "I feel exhausted before lunch",
        },
        {
          value: "I feel sluggish after a meal",
        },
      ],
    };
  },
  methods: {
    setAbilityToPerform(value) {
      this.$store.commit("dietplan/setAbilityToPerform", { value });
      this.$router.push("step-11");
    },
  },
};
</script>