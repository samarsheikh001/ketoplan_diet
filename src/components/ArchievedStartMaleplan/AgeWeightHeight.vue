<template>
  <base-card-slot>
    <base-card-head
      head="Age, Weight and Height"
      question="Enter your current height and weight"
    ></base-card-head>
    <BaseSystemSelect />
    <div class="form-card m-4 flex flex-wrap justify-center">
      <div class="w-full my-4">Height in Feet + inches</div>
      <div class="row-1 flex justify-center">
        <input ref="input-height" class="my-input" placeholder="feet" />
        <input ref="input-height" class="my-input" placeholder="inches" />
      </div>
      <div class="w-full mt-8">Weight in lb</div>
      <input
        ref="input-height"
        type="tel"
        class="my-input"
        placeholder="your wt in lb"
      />
    </div>
    <base-range-slider :weight="90"></base-range-slider>
    <base-button></base-button>
  </base-card-slot>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
import BaseRangeSlider from "../UI/BaseRangeSlider.vue";
import BaseSystemSelect from "../UI/BaseSystemSelect.vue";

export default {
  components: {
    BaseCardSlot,
    BaseSystemSelect,
    BaseCardHead,
    BaseButton,
    BaseRangeSlider,
  },
  mounted() {
  },
};
</script>

<style ,
    BaseRangeSliderscoped>
.my-input {
  @apply bg-transparent;
  width: 30%;
  margin: 0 5px;
  padding: 10px 0px;
  font-size: 1.2em;
  border-bottom: 1px solid gray;
  outline: 0;
}
</style>