<template>
  <base-card-slot>
    <base-card-head head="Set Age" question="What is your age ?">
    </base-card-head>
    <!-- GRID CONTAINER -->
    <div class="grid-container">
      <base-card-option
        @click="setAge({ value: ageOption.value })"
        v-for="(ageOption, index) in ageOptions"
        :key="ageOption.value"
        :cardClass="index"
        :optionImg="ageOption.img"
        :value="ageOption.value"
        :range="ageOption.range"
        imgWidth="sm:w-1/2 w-1/5"
        customAddonClass="py-0"
      >
      </base-card-option></div
  ></base-card-slot>
</template>

<script>
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";

export default {
  components: { BaseCardHead, BaseCardOption, BaseCardSlot },
  name: "SetAge",
  data() {
    return {
      ageOptions: [
        {
          value: "20s",
          range: "18-29",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/age-female-img-1.png",
          card: "card-1",
        },
        {
          value: "30s",
          range: "30-39",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/age-female-img-2.png",
          card: "card-2",
        },
        {
          value: "40s",
          range: "40-49",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/age-female-img-3.png",
          card: "card-3",
        },
        {
          value: "50+",
          range: "",
          img:
            "https://samarsheikh001.github.io/dietplan_host/img/age-female-img-4.png",
          card: "card-4",
        },
      ],
    };
  },
  emits: ["nextStep"],
  methods: {
    setAge({ value }) {
      this.$store.commit("dietplan/setAge", value);
      this.$router.push("step-4");
    },
  },
};
</script>
