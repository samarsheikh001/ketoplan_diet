<template>
  <div class="slidecontainer">
    <p>Your goal weight: {{ value }}</p>
    <input
      type="range"
      :min="min"
      :max="max"
      class="slider"
      v-model="value"
      id="myRange"
    />
  </div>
</template>

<script>
export default {
  name: "BaseRangeSlider",
  props: ["weight"],
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    max() {
      return this.weight + 30;
    },
    min() {
      return this.weight - 30;
    },
  },
};
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: grey;
  border-radius: 30px;
  background: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
  background-size: 200% auto;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: grey;
  border-radius: 100%;
  background-size: 200% auto;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: grey;
  border-radius: 100%;
  background-size: 200% auto;
  cursor: pointer;
}
</style>
