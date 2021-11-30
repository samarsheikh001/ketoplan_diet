<template>
  <div class="m-4">
    <div class="text-2xl text-left font-bold">Settings</div>
    <div class="md:flex flex-wrap">
      <div
        v-for="option in options"
        :key="option.name"
        class="text-left bg-white block  p-4 rounded shadow bg-opacity-50 m-2 ml-0  border-l-8 border-green-300"
      >
        <div class="text-xl">{{ option.name }}</div>
        <div class="font-bold text-gray-500">{{ option.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options']
};
</script>
