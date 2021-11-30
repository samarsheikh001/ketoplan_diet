<template>
  <div class="option-card" :class="['card-' + cardClass, customAddonClass]">
    <div class="text">
      <div class="option-value">
        {{ value }}
      </div>
      <div v-if="range" class="option-range">{{ range }}</div>
    </div>
    <img class="option-img" :class="imgWidth" :src="optionImg" alt="" />
  </div>
</template>

<script>
export default {
  name: "BaseCardOption",
  props: {
    value: String,
    optionImg: String,
    cardClass: Number,
    imgWidth: {
      type: String,
      default: "w-36",
    },
    customAddonClass: {
      type: String,
      default: "p-2",
    },
    range: String,
  },
};
</script>

<style scoped>

.option-card {
  @apply w-11/12 my-2 rounded-xl flex items-center justify-around transform transition-all shadow-xl duration-300;
}

.option-card:hover {
  @apply scale-110 shadow-2xl;
}

.option-img {
  /* @apply w-36; */
}

.option-value,
.option-range {
  @apply font-bold text-gray-100 text-xl my-4;
}

.card-0 {
  background: radial-gradient(#1fe4f5, #3fbafe);
}

.card-1 {
  background: radial-gradient(#fbc1cc, #fa99b2);
}

.card-2 {
  background: radial-gradient(#76b2fe, #b69efe);
}

.card-3 {
  background: radial-gradient(#60efbc, #58d5c9);
}

.card-4 {
  background: radial-gradient(#f588d8, #c0a3e5);
}

.card-5 {
  background: radial-gradient(#ffcf1b, #ff881b);
}
</style>