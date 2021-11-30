<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCardSlot",
};
</script>

<style scoped>
.card {
  @apply lg:shadow-2xl p-4 lg:p-8 lg:m-8 flex flex-col items-center max-w-lg w-full;
  backdrop-filter: blur(10px);
}
</style>
