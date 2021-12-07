<template>
  <div class="system-options">
    <div class="imperial option" :class="{ selected: isImperial }">
      Imperial
    </div>
    <div class="metric option" :class="{ selected: !isImperial }">
      Metric
    </div>
  </div>
</template>

<!-- LENGTH
Metrics to Imperial units

1 meter = 39.37 inches, about 3 feet
1 centimeter = 0.39 inches
1 millimeter = 0.039 inches (to approximate, divide by 25)
AREA

1 square meter = 1.2 square yards, or 10.76 square feet
1 square centimeter = 0.155 square inches
WEIGHT/MASS

1 gram = 0.035 ounces (weight)
1 kilogram = 2.2 pounds -->

<script>
export default {
  props: ["isImperial"],
  name: "BaseSystemSelect",
};
</script>

<style scoped>
.system-options {
  @apply flex overflow-hidden border rounded-3xl;
  border-color: #76b2fe;
}

.option {
  @apply py-1 px-4;
}

.selected {
  background: radial-gradient(#76b2fe, #b69efe);
  color: white;
}
</style>
