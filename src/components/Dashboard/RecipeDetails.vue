<template>
  <div class="overflow-scroll">
    <main>
      <!-- Product -->
      <div v-if="dataLoaded" class="bg-white">
        <div
          class="max-w-2xl mx-auto pb-24 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 items-center"
        >
          <!-- Product details -->
          <div class="lg:max-w-lg lg:self-end max">
            <div class="rounded-lg flex my-2">
              <img
                :src="hadewUrl + recipe.image"
                class="object-center object-contain rounded-xl"
                v-observe-visibility="test"
              />
            </div>
            <div class="mt-4">
              <h1
                class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-left"
              >
                {{ recipe.title }}
              </h1>
              <div class="flex justify-start mt-2">
                <ClockIcon class="w-5 h-5 text-gray-500 mr-2" />
                {{ recipe.cooking_time }} mins
              </div>
            </div>

            <section aria-labelledby="information-heading" class="mt-4">
              <h2 id="information-heading" class="sr-only">
                Product information
              </h2>

              <div class="mt-4 space-y-6">
                <p class="text-base text-gray-500 text-left">
                  {{ recipe.cooking }}
                </p>
              </div>
            </section>
          </div>

          <div
            class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center"
          >
            <div>
              <h3 class="text-gray-900 text-left font-bold text-2xl">
                Ingredients
              </h3>
              <dl
                class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <div
                  v-for="(ingredient, index) in recipe.ingredients.split('\n')"
                  :key="index"
                  class="py-3 flex justify-between text-sm font-medium text-left"
                >
                  <dt class="text-gray-500">
                    {{ ingredient.replace("#", "") }}
                  </dt>
                  <dd class="text-gray-900">
                    {{ recipe.portions.split("\n")[index].replace("#", "") }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { ClockIcon } from "@heroicons/vue/solid";

const hadewUrl = "https://api.hadew.com";

export default {
  components: { ClockIcon },
  setup() {
    const dataLoaded = ref(false);
    const route = useRoute();
    const recipe = ref({});
    fetch(
      `https://dietplan-f925d-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${route.params.id}.json`
    ).then((res) =>
      res.json().then((res) => {
        recipe.value = res;
        dataLoaded.value = true;
      })
    );
    const test = (a,b) => console.log(a,b);
    return { recipe, hadewUrl, dataLoaded, test };
  },
};
</script>
