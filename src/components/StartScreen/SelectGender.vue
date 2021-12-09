<template>
  <div class="image-bg">
    <img src="../../assets/img/adobe-main.png" alt="" />
  </div>

  <h2 class="title">
    <span class="font-extralight">Lose Weight With <br /> </span>Keto Diet
  </h2>
  <h3 class="question">Select your gender</h3>
  <h3 class="tailQue" v-if="tailQue">{{ tailQue }}</h3>

  <div class="center">
    <div class="select-gender">
      <router-link @click="setGender('male')" to="/male/step-1">
        <div class="intro-box male">
          <img
            class="gender-img"
            src="https://samarsheikh001.github.io/dietplan_host/img/male-icon.png"
            alt=""
          />
          <h2 class="gender-text">Male</h2>
        </div>
      </router-link>
      <router-link @click="setGender('female')" to="/female/step-1">
        <div class="intro-box female">
          <img
            class="gender-img"
            src="https://samarsheikh001.github.io/dietplan_host/img/female-icon.png"
            alt=""
          />
          <h2 class="gender-text">Female</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectGender",
  methods: {
    setGender(value) {
      this.$store.commit("dietplan/setGender", value);
    },
  },
};
</script>

<style scoped>
.title {
  @apply text-green-500 text-2xl md:text-5xl mb-4 font-bold mt-8;
  /* line-height: 35px; */
}

.question {
  @apply text-xl mb-4 text-gray-400 py-2;
}

.tailQue {
  @apply my-2;
}

.image-bg {
  z-index: -2;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100vw;
}

.image-bg > img {
  color: red;
  width: 100vw;
}

.gender-img {
  width: 50%;
  position: relative;
  top: 20%;
  left: 25%;
}

.offset-img {
  width: 20vw;
  bottom: 0px;
  right: 0px;
  position: absolute;
}

.gender-text {
  color: white;
  position: relative;
  top: 20%;
  font-size: 1.5rem;
  font-weight: bold;
}

.center {
  display: flex;
  justify-content: center;
}

.select-gender {
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.intro-box {
  margin: 50px 0;
  position: relative;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  cursor: pointer;
}

.intro-box::after {
  max-width: 220px;
  max-height: 220px;
  width: 32vw;
  height: 32vw;
  top: -13%;
  left: -13%;
}
.intro-box::before {
  max-width: 240px;
  max-height: 240px;
  width: 34vw;
  height: 34vw;
  top: -25%;
  left: -25%;
}

.male::after {
  top: -8%;
  left: 8%;
}

.male::before {
  top: -18%;
  left: 18%;
}

.male,
.male::after,
.male::before {
  background: linear-gradient(180deg, #91e7da 0%, #30a4d7 100%);
}

.female,
.female::after,
.female::before {
  background: linear-gradient(180deg, #ef888c 0%, #cf47c6 100%);
}

.intro-box::after,
.intro-box::before {
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  content: "";
  opacity: 0.2;
  animation: scaleUp 1s ease-in-out 0s infinite;
}

@keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 600px) {
  .background {
    background-image: url("https://myketoplan.diet/assets2/light/bg-light-mobile.jpg");
  }
  .gender-text {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>
