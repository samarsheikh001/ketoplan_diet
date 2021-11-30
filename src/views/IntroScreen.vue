<template>
  <intro-box></intro-box>
  <div class="center-button">
    <router-link to="start"
      ><BaseButton class="make-diet-btn" :text="$t('buttons.makeDiet')"
    /></router-link>
  </div>
</template>

<script>
import IntroBox from "../components/IntroScreen/IntroBox";
import BaseButton from "../components/UI/BaseButton";

export default {
  components: {
    IntroBox,
    BaseButton,
  },
};
</script>

<style scoped>
.center-button {
  margin-top: 8vh;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
