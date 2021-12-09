export default {
  namespaced: true,
  state() {
    return {
      gender: "",
      weightGoal: "",
      bodyType: "",
      age: "",
      excludedMeats: [],
      usualActivity: "",
      rest: "",
      negativeBehaviours: [],
      email: "",
      isImperial: false,
      userInputAge: "",
      heightInFeet: "",
      heightInInches: "",
      weightInLb: "",
      heightInCms: "",
      weightInKg: "",
      // gender: "",
    };
  },
  mutations: {
    setGender(state, value) {
      state.gender = value;
    },
    setWeightGoal(state, value) {
      state.weightGoal = value;
    },
    setBodyType(state, value) {
      state.BodyType = value;
    },
    setAge(state, value) {
      state.age = value;
    },
    setExcludedMeats(state, value) {
      state.excludedMeats = value;
    },
    setUsualActivity(state, value) {
      state.usualActivity = value;
    },
    setRest(state, value) {
      state.rest = value;
    },
    setNegativeBehaviours(state, value) {
      state.negativeBehaviours = value;
    },
    setUserInputData(
      state,
      {
        isImperial,
        userInputAge,
        heightInFeet,
        heightInInches,
        weightInLb,
        heightInCms,
        weightInKg,
      }
    ) {
      state.userInputAge = userInputAge;
      state.heightInFeet = heightInFeet;
      state.heightInInches = heightInInches;
      state.weightInLb = weightInLb;
      state.heightInCms = heightInCms;
      state.weightInKg = weightInKg;
      state.isImperial = isImperial;
    },
  },
};
