<template>
  <div class="p-4">
    <div class="max-w-xs">
      <h1 class="max-w-xs text-left font-bold text-xl uppercase">
        Hi {{ username }}, time to log weight.
      </h1>
      <div class="flex">
        <div class="log-counter__input">
          <button class="log-counter__input-btn">-</button>
          <div class="log-counter__field flex">
            <div class="log-counter__field-number active">76</div>
            <div class="log-counter__field-dot">.</div>
            <div class="log-counter__field-number">6</div>
          </div>
          <button class="log-counter__input-btn plus">+</button>
        </div>
        <!-- <button class="p-4 px-6 bg-black text-white rounded m-1">Log</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase.js";
export default {
  mounted() {
    console.log(auth.currentUser.displayName == null);
    if (auth.currentUser.displayName == null) this.username = "username";
    else this.username = auth.currentUser.displayName;
  },
  data() {
    return {
      username: "user",
    };
  },
};
</script>

<style scoped>
.log-counter__input {
  @apply border flex items-center rounded-full my-2 px-4 py-2;
}
.log-counter__input-btn {
  @apply w-12 h-12 rounded-full text-2xl hover:bg-gray-200 font-bold;
}
.log-counter__field-number {
    /* @apply  */
}
</style>
