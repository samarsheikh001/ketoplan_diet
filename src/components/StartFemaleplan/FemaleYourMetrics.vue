<template>
  <base-card-slot>
    <base-card-head
      head="Age, Weight and Height"
      question="Enter your current height and weight"
    ></base-card-head>
    <BaseSystemSelect
      @click="changeMeasurementUnit"
      :is-imperial="isImperial"
    />
    <form
      @submit.prevent="submitData"
      class="flex flex-col justify-center items-center"
    >
      <div class="form-card m-4 flex flex-wrap justify-center">
        <input
          v-model="userInputAge"
          class="my-input"
          placeholder="Age"
          required="true"
        />
        <!-- HEIGHT -->
        <!-- <div class="w-full my-4">
          Height in {{ isImperial ? "Feet & Inches" : "Cms" }}
        </div> -->
        <div v-if="isImperial" class="">
          <input
            v-model="heightInFeet"
            class="my-input"
            placeholder="Height in Feet"
            :required="isImperial"
            type="number"
          />
          <input
            v-model="heightInInches"
            class="my-input"
            placeholder="Height in Inches"
            :required="isImperial"
            type="number"
          />
        </div>
        <div v-else class="row-1 flex justify-center">
          <input
            v-model="heightInCms"
            class="my-input"
            placeholder="Height in CM"
            :required="!isImperial"
            type="number"
          />
        </div>

        <!-- <div class="w-full mt-8">Weight in lb</div> -->
        <input
          v-if="isImperial"
          v-model="weightInLb"
          class="my-input"
          :required="isImperial"
          placeholder="Weight in LBS"
          type="number"
        />
        <input
          v-else
          v-model="weightInKg"
          class="my-input"
          placeholder="Weight in KGS"
          :required="!isImperial"
          type="number"
        />
      </div>
      <base-range-slider
        :weight="isImperial ? parseInt(weightInLb) : parseInt(weightInKg)"
      ></base-range-slider>
      <base-button @submit="submitData"></base-button>
    </form>
  </base-card-slot>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";
import BaseRangeSlider from "../UI/BaseRangeSlider.vue";
import BaseSystemSelect from "../UI/BaseSystemSelect.vue";

export default {
  data() {
    return {
      isImperial: true,
      userInputAge: "",
      heightInFeet: "",
      heightInInches: "",
      weightInLb: "",
      heightInCms: "",
      weightInKg: "",
    };
  },
  methods: {
    changeMeasurementUnit() {
      this.isImperial = !this.isImperial;
    },
    submitData() {
      this.$store.commit("dietplan/setUserInputData", {
        isImperial: this.isImperial,
        userInputAge: this.userInputAge,
        heightInFeet: this.heightInFeet,
        heightInInches: this.heightInInches,
        weightInLb: this.weightInLb,
        heightInCms: this.heightInCms,
        weightInKg: this.weightInKg,
      });
      this.$router.push("step-9");
    },
  },
  components: {
    BaseCardSlot,
    BaseSystemSelect,
    BaseCardHead,
    BaseButton,
    BaseRangeSlider,
  },
};
</script>

<style , BaseRangeSliderscoped>
.my-input {
  @apply bg-transparent border-none;
  margin: 0 5px;
  padding: 10px 0px;
  font-size: 1.2em;
  border-bottom: 1px solid gray;
  outline: 0;
}
</style>
