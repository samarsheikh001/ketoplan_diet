<template>
  <h2 class="title" :class="{'text-green-500':greenTitle}">{{ head }}</h2>
  <h3 class="question">
    {{ question }}
  </h3>
  <h3 class="tailQue" v-if="tailQue">{{ tailQue }}</h3>
</template>

<script>
export default {
  name: "BaseCardHead",
  props: ["head", "question", "tailQue", "greenTitle"],
};
</script>

<style scoped>
.title {
  @apply text-2xl mb-4 font-bold;
}

.question {
  @apply text-xl mb-4 text-gray-400 py-2;
}

.tailQue {
  @apply my-2;
}
</style>