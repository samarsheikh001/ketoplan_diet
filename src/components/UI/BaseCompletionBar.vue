<template>
  <div class="box">
    <div class="percent">
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70" ref="progress"></circle>
      </svg>
      <div class="num">
        <h2 class="text-gray-300">{{ fakeProgress % 100 }}</h2>
      </div>
    </div>
    <h2 class="text">
      {{
        progress >= 200
          ? "Calculating BMI"
          : progress >= 100
          ? "Building Plan"
          : "Setting Diet"
      }}
    </h2>
    <h1 class="font-bold my-2">Relax, while we are calculating your data...</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      fakeProgress: 0,
      colors: ["#895cf2", "#ffabf4", "#03a9f4"],
    };
  },
  mounted() {
    const myInterval = setInterval(() => {
      // if (this.progress <= 40 || this.progress > 70)
      this.setProgress(this.progress);
      this.progress++;
      if (this.progress % 300 == 0) {
        this.$emit("completed");
        clearInterval(myInterval);
        return;
      } else if (this.progress % 300 == 0) {
        this.$refs.progress.style.stroke = this.colors[0];
      } else if (this.progress % 200 == 0) {
        this.$refs.progress.style.stroke = this.colors[1];
      } else if (this.progress % 100 == 0) {
        this.$refs.progress.style.stroke = this.colors[2];
      }
    }, 30);
    this.setProgress(this.progress);
  },
  emits: ["completed"],
  methods: {
    setProgress(value) {
      this.$refs.progress.style.strokeDashoffset = 440 - (440 * value) / 100;
      this.fakeProgress = value;
    },
  },
};
</script>

<style scoped>
.box {
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  transition: transform 0.2s;
}
/* .box:hover
{
 transform:scale(1.2);
} */
.box .percent {
  width: 150px;
  height: 150px;
  position: relative;
}
.box .percent svg {
  width: 150px;
  height: 150px;
  position: relative;
}
.box .percent svg circle {
  width: 150px;
  height: 150px;
  fill: none;
  stroke-width: 10;
  stroke: #000;
  transform: translate(5px, 5px);
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke-linecap: round;
}
.box .percent svg circle:nth-child(1) {
  stroke-dashoffset: 0;
  stroke: #f3f3f3;
}
.box .percent svg circle:nth-child(2) {
  stroke-dashoffset: calc(440 - (440 * 87) / 100);
  stroke: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
  stroke: #03a9f4;
}
.box .percent .num {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #111;
}
.box .percent .num h2 {
  font-size: 48px;
}
.box .percent .num h2 span {
  font-size: 24px;
}
.box .text {
  padding: 10px 0 0;
  color: #999;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
