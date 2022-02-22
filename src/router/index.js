import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

// VIEWS
// import IntroScreen from "../views/IntroScreen.vue";
import StartScreen from "../views/StartScreen.vue";
import NotFoundScreen from "../views/NotFoundScreen.vue";
import StartMalePlan from "../views/StartMalePlan.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import StripePayment from "../views/StripePayment.vue";
import StripePaymentSuccess from "../views/StripePaymentSuccess.vue";
import ContactUs from "../views/ContactUs.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

//FEMALE DIET PLAN
import FemaleSetAge from "../components/StartFemaleplan/FemaleSetAge.vue";
import FemaleBodyType from "../components/StartFemaleplan/FemaleBodyType.vue";
import FemaleUsualActivity from "../components/StartFemaleplan/FemaleUsualActivity.vue";
import FemaleNegativeBehaviour from "../components/StartFemaleplan/FemaleNegativeBehaviour.vue";
import FemaleRest from "../components/StartFemaleplan/FemaleRest.vue";
import FemaleLoseOrGain from "../components/StartFemaleplan/FemaleLoseOrGain.vue";
import FemaleMeat from "../components/StartFemaleplan/FemaleMeat.vue";
import FemaleYourMetrics from "../components/StartFemaleplan/FemaleYourMetrics.vue";

//MALE DIET PLAN
import SetAge from "../components/StartMaleplan/SetAge.vue";
import BodyType from "../components/StartMaleplan/BodyType.vue";
import UsualActivity from "../components/StartMaleplan/UsualActivity.vue";
import NegativeBehaviour from "../components/StartMaleplan/NegativeBehaviour.vue";
import Rest from "../components/StartMaleplan/Rest.vue";
import LoseOrGain from "../components/StartMaleplan/LoseOrGain.vue";
import Meat from "../components/StartMaleplan/Meat.vue";
import YourMetrics from "../components/StartMaleplan/YourMetrics.vue";

//START SCREEN
import SelectGender from "../components/StartScreen/SelectGender.vue";

import EmailCard from "../components/EmailCard.vue";
import PersonalSummary from "../components/PersonalSummary.vue";
import PlanDetails from "../components/PlanDetails.vue";

//DASHBOARD
import DashboardHome from "../components/Dashboard/DashboardHome.vue";
import Recipes from "../components/Dashboard/Recipes.vue";
import RecipeDetails from "../components/Dashboard/RecipeDetails.vue";
import Profile from "../components/Dashboard/Profile.vue";
import Meals from "../components/Dashboard/Meals.vue";

const routes = [
  {
    path: "/",
    name: "IntroScreen",
    component: StartScreen,
    children: [
      {
        path: "",
        component: SelectGender,
      },
    ],
  },
  {
    path: "/male",
    component: StartMalePlan,
    children: [
      {
        path: "step-1",
        component: LoseOrGain,
      },
      {
        path: "step-2",
        component: BodyType,
      },
      {
        path: "step-3",
        component: SetAge,
      },
      {
        path: "step-4",
        component: Meat,
      },
      {
        path: "step-5",
        component: UsualActivity,
      },
      {
        path: "step-6",
        component: Rest,
      },
      {
        path: "step-7",
        component: NegativeBehaviour,
      },
      {
        path: "step-8",
        component: YourMetrics,
      },
      {
        path: "step-9",
        component: PersonalSummary,
      },
      {
        path: "step-10",
        component: EmailCard,
      },
      {
        path: "step-11",
        component: PlanDetails,
      },
    ],
  },
  {
    path: "/female",
    component: StartMalePlan,
    children: [
      {
        path: "step-1",
        component: FemaleLoseOrGain,
      },
      {
        path: "step-2",
        component: FemaleBodyType,
      },
      {
        path: "step-3",
        component: FemaleSetAge,
      },
      {
        path: "step-4",
        component: FemaleMeat,
      },
      {
        path: "step-5",
        component: FemaleUsualActivity,
      },
      {
        path: "step-6",
        component: FemaleRest,
      },
      {
        path: "step-7",
        component: FemaleNegativeBehaviour,
      },
      {
        path: "step-8",
        component: FemaleYourMetrics,
      },
      {
        path: "step-9",
        component: PersonalSummary,
      },
      {
        path: "step-10",
        component: EmailCard,
      },
      {
        path: "step-11",
        component: PlanDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { requiresAuth: true },
    component: Dashboard,
    children: [
      { path: "", component: DashboardHome },
      { path: "profile", component: Profile },
      { path: "recipes", component: Recipes },
      { path: "recipes/:id", component: RecipeDetails },
      { path: "meals", component: Meals },
    ],
  },
  {
    path: "/register",
    component: Register,
    meta: { requiresUnauth: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { requiresUnauth: true },
  },
  {
    path: "/stripe-payment",
    component: StripePayment,
  },
  {
    path: "/stripe-payment-success",
    component: StripePaymentSuccess,
  },
  { path: "/contact", component: ContactUs },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

router.beforeEach(async (to, from, next) => {
  while (!store.state.auth.fbInitialised) {
    await delay(250);
  }
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/register");
  } else if (to.meta.requiresUnauth && store.getters["auth/isAuthenticated"]) {
    next("/dashboard/profile");
  } else next();
});

// router.beforeEach(function(to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next('/auth');
//   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//     next('/coaches');
//   } else {
//     next();
//   }
// });
export default router;
