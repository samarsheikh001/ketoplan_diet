<template>
  <plan-details-price-card />
  <div class="text-3xl">What users say aboout us</div>
  <section class="bg-white overflow-hidden">
    <div
      class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20"
    >
      <svg
        class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
        width="784"
        height="404"
        fill="none"
        viewBox="0 0 784 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="784"
          height="404"
          fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
        />
      </svg>

      <svg
        class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
        />
      </svg>

      <div class="relative lg:flex lg:items-center">
        <div class="hidden lg:block lg:flex-shrink-0">
          <img
            class="h-64 w-64 rounded-full xl:h-80 xl:w-80"
            src="https://static.ketocycle.diet/images/checkout/success-story-mike.png"
            alt=""
          />
        </div>

        <div class="relative lg:ml-10">
          <svg
            class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
            aria-hidden="true"
          >
            <path
              stroke-width="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote class="relative">
            <div
              class="leading-9 font-medium text-gray-900 text-xl sm:text-2xl"
            >
              <p>
                “After I went into a cardiac arrest last year, I knew I was
                given a "mulligan" in this game we call life. After weeks of
                treatment, I decided I want to change my life. When I stumbled
                upon Keto diet, I was immediately amazed at how easy the recipes
                were to follow. The food was fantastic too. What I think sets
                Keto Cycle apart from all the others is that it's not a diet.
                It's a total lifestyle change and food education. Now, I feel
                better than I have in years. I’m happy that I will have a chance
                to watch my grandchildren grow up and be a part of their lives.”
              </p>
            </div>
            <footer class="mt-8">
              <div class="flex">
                <div class="flex-shrink-0 lg:hidden">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://static.ketocycle.diet/images/checkout/success-story-mike.png"
                    alt=""
                  />
                </div>
                <div class="ml-4 lg:ml-0">
                  <div class="text-base font-medium text-gray-900">
                    Mike, 58
                  </div>
                  <div class="text-base font-medium text-indigo-600">
                    Oklahoma, USA
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <section class="text-left p-6">
    <div>
      <div class="font-bold text-3xl">All Plans Include</div>
      <div v-for="plan in planIncludes" :key="plan" class="py-2">
        <CheckCircleIcon class="w-8 inline-block text-green-500" />
        <span>{{ plan }}</span>
      </div>
    </div>
    <img src="https://myketoplan.co/safe-checkout.png" alt="" />
  </section>

  <section class="text-left p-6">
    <div>
      <div class="font-bold text-3xl">Finally a meal plan that works</div>
      <div>
        <div class="flex space-x-6 items-center">
          <div>
            <div class="text-xl">
              People Just Like You Achieved Great Results Using Our Meal Plans:
            </div>
            <div>
              MyKetoPlan is a huge help because it lays out everything in such
              an easy way to follow. I'm pretty smart, but with all of the
              information out there it was just so overwhelming and I needed a
              blueprint on exactly what to do. - Jenny K.
            </div>
          </div>
          <img
            class="w-1/2 max-w-sm"
            src="https://myketoplan.co/_next/static/images/female-before-after-1-613a1f622ac2a577a01f99abd5c9da39.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlanDetailsPriceCard from "./PlanDetailsPriceCard.vue";
import { CheckCircleIcon } from "@heroicons/vue/solid";

export default {
  components: { PlanDetailsPriceCard, CheckCircleIcon },
  data() {
    return {
      planIncludes: [
        "Easy to follow Customized Keto Meal Plan",
        "Keto nutrition analysis",
        "Weekly kgrocery list",
        "Easy-to-follow, tasty recipes",
        "Digital access on any device",
        "Ingredients found at any store",
        "Designed to give results in just 28 days",
        "Free keto starter guide",
      ],
    };
  },
};
</script>
