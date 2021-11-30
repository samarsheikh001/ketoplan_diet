<template>
  <div class="overflow-scroll bg-white">
    <div class="container grid grid-cols-1 lg:grid-cols-2 pt-10">
      <div class="col-1 py-2">
        <span
          class="relative inline-flex items-center justify-center h-32 w-32 rounded-full bg-green-300"
        >
          <span class="text-5xl font-bold text-white">{{ username[0] }}</span>
          <span
            @click="editName"
            class="absolute bottom-0 right-1 bg-gray-200 p-1 rounded-lg"
            ><PencilIcon class="w-5 h-5"
          /></span>
        </span>
        <div class="py-2" v-if="activeNameChange">
          <input type="text" v-model="username" />
        </div>
        <div v-else class="text-xl py-2">{{ username }}</div>
      </div>
      <!-- <button @click="test" class="bg-gray-500 text-white p-2">Test</button> -->

      <div class="col-2">
        <ProfileShowData :stats="stats" :stats2="stats2" />
      </div>
    </div>

    <ProfileSettings :options="options" />
    <ProfileFooter />
    <!-- CANCEL MEMBERSHIP -->
    <div class="bg-white shadow sm:rounded-lg m-4 sm:text-left inline-block">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Cancel your membership
        </h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Once you cancel your membership, you will lose all data associated
            with it.
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
          >
            Cancel membership
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PencilIcon } from "@heroicons/vue/solid";
import ProfileFooter from "./ProfileFooter.vue";
import ProfileShowData from "./ProfileShowData.vue";
import ProfileSettings from "./ProfileSettings.vue";

import { auth, updateProfile, getUserData } from "../../firebase.js";
export default {
  data() {
    return {
      username: "username",
      activeNameChange: false,
      stats: [
        {
          id: 1,
          name: "Height",
          stat: "177 cm",
          icon: '<i class="fas fa-ruler"></i>',
        },
        {
          id: 2,
          name: "Weight",
          stat: "76 kg",
          icon: '<i class="fas fa-weight"></i>',
        },
        {
          id: 3,
          name: "Meal Plan",
          stat: "Keto Meal",
          icon: '<i class="fas fa-spa"></i>',
        },
      ],
      stats2: [
        {
          id: 1,
          name: "Metabolic Age",
          stat: "24 years",
        },
        {
          id: 2,
          name: "BMI",
          stat: "24 (Normal)",
        },
        // {
        //   id: 3,
        //   name: "Calories",
        //   stat: "2285 Cal",
        // },
      ],
      options: [
        {
          name: "Measurement",
          value: "Metric",
        },
        {
          name: "Language",
          value: "English",
        },
        {
          name: "Email",
          value: "Petdoodles.co@gmail.com",
        },
      ],
    };
  },
  components: { ProfileShowData, ProfileFooter, PencilIcon, ProfileSettings },
  mounted() {
    console.log(auth.currentUser.displayName == null);
    this.options[2].value = auth.currentUser.email;
    if (auth.currentUser.displayName == null) this.username = "username";
    else this.username = auth.currentUser.displayName;
    this.setUserData();
  },
  methods: {
    editName() {
      this.activeNameChange = !this.activeNameChange;
      if (
        this.username !== "username" ||
        this.username == !auth.currentUser.displayName
      ) {
        updateProfile(auth.currentUser, {
          displayName: this.username,
        })
          .then(() => {
            console.log("succeed");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async setUserData() {
      const response = await getUserData({ email: auth.currentUser.email });
      const userData = response.dietplan;
      console.log(userData);
      console.log(userData.userInputAge);
      if (userData.isImperial) {
        this.stats[1].stat = userData.userInputAge + " lb";
        this.options[0].value = "Imperial";
        this.stats[0].stat = `${userData.heightInFeet}' ${userData.heightInInches}`;
        console.warn(this.stats[0]);
      } else {
        this.options[0].value = "Metric";
      }
    },
    test() {
      console.log(auth.currentUser.displayName);
    },
  },
};
</script>
