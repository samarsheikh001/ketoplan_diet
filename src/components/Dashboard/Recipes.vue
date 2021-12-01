<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <h1 class="flex-1 text-2xl font-bold text-gray-900">Recipes</h1>
        </div>

        <!-- Tabs -->
        <!-- <div class="mt-3 sm:mt-2">
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option selected="">Recently Viewed</option>
              <option>Recently Added</option>
              <option>Favorited</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="flex items-center border-b border-gray-200">
              <nav
                class="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                aria-label="Tabs"
              >
                <a
                  v-for="tab in tabs"
                  :key="tab.name"
                  :href="tab.href"
                  :aria-current="tab.current ? 'page' : undefined"
                  :class="[
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                  ]"
                >
                  {{ tab.name }}
                </a>
              </nav>
            </div>
          </div>
        </div> -->

        <!-- Gallery -->
        <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
          <ul
            role="list"
            class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <li
              v-for="(recipe, index) in filteredRecipes"
              :key="recipe"
              class="relative"
              @click="selectedRecipe = index"
            >
              <div
                :class="[
                  selectedRecipe == index
                    ? 'ring-2 ring-offset-2 ring-indigo-500'
                    : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                  'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden',
                ]"
              >
                <img
                  :src="hadewUrl + recipe.image"
                  alt=""
                  :class="[
                    true ? '' : 'group-hover:opacity-75',
                    'object-cover pointer-events-none',
                  ]"
                />
                <button
                  type="button"
                  class="absolute inset-0 focus:outline-none"
                >
                  <span class="sr-only"
                    >View details for {{ recipe.title }}</span
                  >
                </button>
              </div>
              <p
                class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none text-left"
              >
                {{ recipe.title }}
              </p>
              <div class="flex justify-between">
                <p
                  class="text-sm font-medium text-gray-500 pointer-events-none flex items-center justify-around"
                >
                  <ClockIcon class="h-5 w-5 mr-2" />
                  {{ recipe.cooking_time }} mins
                </p>
                <router-link :to="`/dashboard/recipes/${index}`"
                  ><ArrowCircleRightIcon class="w-8 h-8 text-green-600"
                /></router-link>
              </div>
            </li>
          </ul>
          <button
            class="text-gray-500 border border-gray-500 px-4 py-2 my-2"
            @click="loadMore"
          >
            Load More
          </button>
        </section>
      </div>
    </main>

    <!-- Details sidebar -->
    <aside
      v-if="dataLoaded"
      class="hidden w-96 bg-red p-8 border-l border-gray-200 overflow-y-auto lg:block"
    >
      <div class="pb-16 space-y-6">
        <div v-if="dataLoaded">
          <div
            class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
          >
            <img
              :src="hadewUrl + recipes[selectedRecipe].image"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="mt-4 flex items-start justify-between">
            <div>
              <h2 class="text-lg font-medium text-gray-900">
                <span class="sr-only">Details for </span
                >{{ recipes[selectedRecipe].title }}
              </h2>
              <p class="text-sm font-medium text-gray-500 text-left">
                {{ recipes[selectedRecipe].cooking_time }}
              </p>
            </div>
            <button
              type="button"
              class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <HeartIcon class="h-6 w-6" aria-hidden="true" />
              <span class="sr-only">Favorite</span>
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Ingredients</h3>
          <dl
            class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <div
              v-for="(ingredient, index) in recipes[
                selectedRecipe
              ]?.ingredients.split('\n')"
              :key="index"
              class="py-3 flex justify-between text-sm font-medium text-left"
            >
              <dt class="text-gray-500">{{ ingredient.replace("#", "") }}</dt>
              <dd class="text-gray-900">
                {{
                  recipes[selectedRecipe].portions
                    .split("\n")
                    [index].replace("#", "")
                }}
              </dd>
            </div>
          </dl>
        </div>
        <div v-if="dataLoaded">
          <h3 class="font-medium text-gray-900">Description</h3>
          <div class="mt-2 flex items-center justify-between">
            <p class="">
              {{ recipes[selectedRecipe].cooking }}
            </p>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
const hadewUrl = "https://api.hadew.com";
const tabs = [
  { name: "Recently Viewed", href: "#", current: true },
  { name: "Recently Added", href: "#", current: false },
  { name: "Favorited", href: "#", current: false },
];
const files = [
  {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    current: true,
  },
];
const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
};

import { HeartIcon } from "@heroicons/vue/outline";
import { ClockIcon, ArrowCircleRightIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
export default {
  components: {
    HeartIcon,
    ClockIcon,
    ArrowCircleRightIcon,
  },
  setup() {
    const dataLoaded = ref(false);
    const recipes = ref([]);
    const filteredRecipes = ref([]);
    const selectedRecipe = ref(0);

    const loadMore = () => {
      filteredRecipes.value = recipes.value.filter(
        (e, index) => index < filteredRecipes.value.length + 4
      );
    };
    fetch(
      "https://raw.githubusercontent.com/samarsheikh001/samarsheikh001.github.io/main/dietplan_host/data/recipes.json"
    ).then((res) => {
      res.json().then((data) => {
        if (!recipes.value == []) {
          recipes.value = data;
          dataLoaded.value = true;
          filteredRecipes.value = recipes.value.filter(
            (_, index) => index < 12
          );
        }
      });
    });
    return {
      hadewUrl,
      recipes,
      tabs,
      files,
      currentFile,
      selectedRecipe,
      dataLoaded,
      filteredRecipes,
      loadMore,
    };
  },
};
</script>
