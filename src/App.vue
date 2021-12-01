<template>
  <!-- https://myketoplan.diet/assets/light/step-1-left-desktop-fs8.png -->
  <div class="container mx-auto">
    <!-- {{ $store.state.dietplan }} -->
    <!-- <div class="m-10 absolute z-20">{{ $store.state.auth }}</div>
    <div class="m-20 absolute z-20">
     Login: {{ $store.getters["auth/isAuthenticated"] }}
    </div>
    <router-link class="absolute m-30 bg-red-50 z-20" to="dashboard"
      >Dashboard</router-link
    > -->

    <!-- <div class="bg-black">sd</div>
    <div>
      <vs-button :active="active == 0" @click="active = 0">
        Active
      </vs-button>
      <vs-button :active="active == 1" @click="active = 1">
        Default
      </vs-button>
      <vs-button disabled>Disabled</vs-button>
    </div> -->

    <router-view />
  </div>
</template>
<script>
// import "./firebase.js";

export default {
  mounted() {
    this.$store.dispatch("auth/watchAuth");
  },
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,100&display=swap");
#app {
  letter-spacing: 1px;
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-radient {
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

.bg-radient:hover {
  background-position: 100% center;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-200;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-300;
}
</style>
