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
