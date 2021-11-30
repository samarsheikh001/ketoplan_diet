<template>
    <div class="image-bg">
      <img class="" src="../assets/img/adobe-main.png" alt="" />
    </div>

  <div class="center-col">
    <router-view v-slot="{ Component }">
      <transition> <component :is="Component" /></transition>
    </router-view>
  </div>
</template>

<script>
import BaseCardSlot from "../components/UI/BaseCardSlot.vue";
export default {
  components: { BaseCardSlot },
  name: "StartMakePlan",
};
</script>

<style scoped>
.image-bg {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: -10;
  width: 100vw;
  /* background: red; */
  /* filter: grayscale(100%); */
}

.image-bg > img {
  width: 100vw;
  opacity: 0.3;
}

/* .background {
  position: absolute;
  z-index: -10;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  background-image: url("https://myketoplan.diet/assets2/light/adobe-1.jpeg");
} */

@media only screen and (max-width: 600px) {
  .background {
    background-image: url("https://myketoplan.diet/assets2/light/bg-light-mobile.jpg");
  }
}

.center-col {
  @apply flex flex-col items-center my-4;
}

@media only screen and (max-width: 600px) {
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-300px);
}

.v-enter-active {
  transition: all 0.3s ease-out 0.3s;
}

.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.v-leave-from {
  /* opacity: 1; */
  transform: translateX(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>