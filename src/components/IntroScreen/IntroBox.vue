<template>
  <div class="intro-box">
    <img class="intro-img" src="@/assets/img/dietician.jpg" alt="" />
    <div class="intro-text text-center">
      {{ $t("message.intro") }}
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
.intro-box {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.intro-img {
  max-width: 600px;
  max-height: 600px;
  margin: 10px;
  margin-top: 64px;
  padding-bottom: 30px;
}

.intro-text {
  font-size: 1.4em;
}
</style>