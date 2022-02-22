<template>
  <the-header></the-header>
  <router-view></router-view>
  <footer class="space-x-2">
    <button class="bg-black text-white py-2 px-4 rounded">
      <router-link to="/contact">Contact Us</router-link>
    </button>
    <button class="bg-black text-white py-2 px-4 rounded">
      <router-link to="/privacy-policy">Privacy Policy</router-link>
    </button>
  </footer>
</template>

<script>
import TheHeader from "../components/Layout/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>
