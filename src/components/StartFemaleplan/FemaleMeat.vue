<template>
  <base-card-slot>
    <base-card-head
      head="Meats"
      question="Finally, which meat would you like to exclude in your meal plan?"
    ></base-card-head>

    <div class="grid-container">
      <BaseCardOption
        v-for="(option, index) in guiltyOptions"
        @click="
          option.value == 'None'
            ? setNegativeBehaviour(['None'])
            : selectCard(option)
        "
        :class="{ 'ring-4 ring-pink-300': option.selected }"
        :key="index"
        :cardClass="index"
        :value="option.value"
        :optionImg="option.img"
        imgWidth="md:w-1/2 w-1/3"
      />
    </div>
    <base-button
      @click="
        setNegativeBehaviour(
          guiltyOptions.filter((e) => e.selected).map((e) => e.value)
        )
      "
      class="w-full"
      text="continue"
    ></base-button
  ></base-card-slot>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardOption from "../UI/BaseCardOption.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
export default {
  name: "NegativeBehaviour",
  components: { BaseButton, BaseCardHead, BaseCardSlot, BaseCardOption },
  data() {
    return {
      guiltyOptions: [
        {
          value: "Turkey",
          img: "https://samarsheikh001.github.io/dietplan_host/img/meat-image-1.svg",
          selected: false,
        },
        {
          value: "Fish",
          img: "https://samarsheikh001.github.io/dietplan_host/img/meat-image-2.svg",
          selected: false,
        },
        {
          value: "Beef",
          img: "https://samarsheikh001.github.io/dietplan_host/img/meat-image-3.svg",
          selected: false,
        },
        {
          value: "Chicken",
          img: "https://samarsheikh001.github.io/dietplan_host/img/meat-image-4.svg",
          selected: false,
        },
        {
          value: "Pork",
          img: "https://samarsheikh001.github.io/dietplan_host/img/meat-image-5.svg",
          selected: false,
        },
        {
          value: "None",
          img: "https://samarsheikh001.github.io/dietplan_host/img/image-remove.svg",
          selected: false,
        },
      ],
    };
  },
  methods: {
    setNegativeBehaviour(value) {
      this.$store.commit("dietplan/setExcludedMeats", value);
      this.$router.push("step-5");
    },
    cardClass(setClass) {
      if (!setClass.selected) return setClass.card;
      else return setClass.card + " selected bg-red-500";
    },
    selectCard(card) {
      card.selected = !card.selected;
    },
  },
};
</script>
