<template>
  <!-- <button class="ring-4 ring-gray">{{text}}</button> -->
  <button :class="wClass">{{ text ?? "Continue" }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["text", "wClass"],
};
</script>

<style scoped>
button {
  margin: 20px 0px;
  display: block;
  text-transform: uppercase;
  padding: 1rem 2rem;
  color: white;
  background: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
  background-size: 200% auto;
  font-weight: 800;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  background-position: 100% center;
}
</style>
