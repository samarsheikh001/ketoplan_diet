<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-2">
      <div
        v-for="item in stats"
        :key="item.id"
        class="bg-gray-200 z-10 p-2 shadow rounded-lg mx-4 bg-opacity-50"
      >
        <div class="bg-radient rounded-md p-3 inline-flex">
          <div v-html="item.icon" class="w-5 h-5"></div>
        </div>
        <p class="text-sm text-gray-500">
          {{ item.name }}
        </p>
        <p class="text-2xl font-semibold text-gray-600 text-center py-1">
          {{ item.stat }}
        </p>
      </div>
    </dl>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
    <div
      class="p-2 rounded-xl m-2 shadow bg-gray-200 bg-opacity-50 border-l-8 border-pink-300"
      v-for="i in stats2"
      :key="i.id"
    >
      <div class="font-bold text-sm">{{ i.name }}</div>
      <div>{{ i.stat }}</div>
    </div>
  </div>
</template>

<script>
import {} from "@heroicons/vue/outline";

export default {
  props: ["stats", "stats2"],
  components: {},
  setup() {
    return {};
  },
};
</script>
