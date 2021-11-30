<template>
  <!-- <div class="">
    <div class="flex justify-between">
      <i class="fas fa-long-arrow-alt-left" @click="scrollTo(1)"></i>
      <div class="flex overflow-x-scroll mx-2" ref="test">
        <div
          class="px-4 border border-gray-400 rounded mx-0.5 hover:bg-black hover:text-white bg-white"
          :ref="i"
          v-for="i in ['1', '2', '3', '4', '5', '6', '7']"
          :key="i"
        >
          <div>Tue</div>
          <div class="font-bold text-2xl">0{{ i }}</div>
        </div>
      </div>
      <i class="fas fa-long-arrow-alt-right" @click="scrollTo"></i>
    </div>
  </div> -->
  <div>
    <label for="dateofbirth" class="m-4 text-lg font-bold">Meal Day</label>
    <input type="date" name="dateofbirth" id="dateofbirth" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
i {
  @apply p-5 border rounded text-white bg-black;
}
* {
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
}
::-webkit-scrollbar {
  display: none;
}

[type="date"] {
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
</style>
