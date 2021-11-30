<template>
  <base-card-slot>
    <base-card-head
      head="Negative Behaviour"
      question="We all have a few, which ones are you guity of?"
    ></base-card-head>

    <div class="grid-container">
      <BaseCardOption
        v-for="(option, index) in guiltyOptions"
        @click="
          option.value == 'None'
            ? setNegativeBehaviour(null)
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
          value: "I don't rest enough",
          img: "http://fitbyeat.com/img/habits-image-1.svg",
          selected: false,
        },
        {
          value: "I have a sweet tooth",
          img: "http://fitbyeat.com/img/habits-image-2.svg",
          selected: false,
        },
        {
          value: "I have too much soda",
          img: "http://fitbyeat.com/img/habits-image-3.png",
          selected: false,
        },
        {
          value: "I eat many salty foods",
          img: "http://fitbyeat.com/img/habits-image-4.svg",
          selected: false,
        },
        {
          value: "I enjoy midnight snacks",
          img: "http://fitbyeat.com/img/habits-image-5.svg",
          selected: false,
        },
        {
          value: "None",
          img: "http://fitbyeat.com/img/image-remove.svg",
          selected: false,
        },
      ],
    };
  },
  methods: {
    setNegativeBehaviour(value) {
      this.$store.commit("dietplan/setNegativeBehaviours", value);
      this.$router.push("step-8");
    },
    cardClass(setClass) {
      if (!setClass.selected) return setClass.card;
      else return setClass.card + " selected";
    },
    selectCard(card) {
      card.selected = !card.selected;
    },
  },
};
</script>
