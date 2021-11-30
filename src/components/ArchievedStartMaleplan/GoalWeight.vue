<template>
  <base-card-slot>
    <div class="center card">
      <base-card-head
        head="Goal Weight"
        question="Enter your weight you want to achieve"
      ></base-card-head>
      <base-system-select></base-system-select>
      <input
        ref="input-weight"
        type="number"
        class="weight-input"
        placeholder="kg"
      />
      <base-button @click="setGoal" text="Continue"></base-button></div
  ></base-card-slot>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import BaseCardHead from "../UI/BaseCardHead.vue";
import BaseSystemSelect from "../UI/BaseSystemSelect.vue";
import BaseCardSlot from "../UI/BaseCardSlot.vue";

export default {
  components: { BaseButton, BaseCardHead, BaseSystemSelect, BaseCardSlot },
  name: "GoalWeight",
  data() {
    return {
      selectedSystem: "Imperial",
    };
  },
  methods: {
    setSystem(value) {
      this.selectedSystem = value;
      this.$refs["input-weight"].placeholder =
        this.selectedSystem === "Imperial" ? "kg" : "lbs";
    },
    setGoal() {
      this.$store.commit("dietplan/setGoalWeight", { value: "79" });
      this.$router.push("/male/step-3");
    },
  },
};
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  /* color: black; */
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: black;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: black;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weight-input {
  width: 100px;
  margin: 30px;
  padding: 10px 0px;
  font-size: 1.2em;
  border-bottom: 1px solid gray;
  outline: 0;
}
</style>