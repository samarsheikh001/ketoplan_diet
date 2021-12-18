<template>
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-radient overflow-y-auto md:block z-10">
      <div class="w-full py-6 flex flex-col items-center">
        <div class="flex-1 mt-6 w-full px-2 space-y-1">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="'/dashboard/' + item.href"
            :class="[
              item.current
                ? 'bg-indigo-800 text-white'
                : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
              'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-white'
                  : 'text-indigo-300 group-hover:text-white',
                'h-6 w-6',
              ]"
              aria-hidden="true"
            />
            <span class="mt-2">{{ item.name }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog
        as="div"
        class="fixed inset-0 z-40 flex md:hidden"
        @close="mobileMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-1 right-0 -mr-14 p-1">
                <button
                  type="button"
                  class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                  @click="mobileMenuOpen = false"
                >
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  <span class="sr-only">Close sidebar</span>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 px-4 flex items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div class="space-y-1">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="'/dashboard/' + item.href"
                    :class="[
                      item.current
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                      'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-white'
                          : 'text-indigo-300 group-hover:text-white',
                        'mr-3 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    <span>{{ item.name }}</span>
                  </router-link>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="w-full">
        <div
          class="relative z-10 flex-shrink-0 h-16 border-b border-gray-200 shadow-sm flex"
        >
          <button
            type="button"
            class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
          </button>
          <div class="flex items-center justify-end w-full mx-2">
            <button
              @click="signOut"
              class="py-2 px-4 bg-black text-white rounded"
            >
              Signout
            </button>
          </div>
          <!-- <div class="flex-1 flex justify-between px-4 sm:px-6">
            <div class="flex-1 flex">
              <form class="w-full flex md:ml-0" action="#" method="GET">
                <label for="desktop-search-field" class="sr-only">Search all files</label>
                <label for="mobile-search-field" class="sr-only">Search all files</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input name="mobile-search-field" id="mobile-search-field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden" placeholder="Search" type="search" />
                  <input name="desktop-search-field" id="desktop-search-field" class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block" placeholder="Search all files" type="search" />
                </div>
              </form>
            </div>
          </div> -->
        </div>
      </header>

      <!-- Main content -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { signOutUser } from "../firebase.js";

import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  // CogIcon,
  // CollectionIcon,
  UserCircleIcon,
  HeartIcon,
  HomeIcon,
  MenuAlt2Icon,
  // PhotographIcon,
  PlusIcon as PlusIconOutline,
  // UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
  XIcon,
} from "@heroicons/vue/outline";
import {
  PencilIcon,
  PlusIcon as PlusIconSolid,
  SearchIcon,
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from "@heroicons/vue/solid";

const navigation = [
  { name: "Home", href: "", icon: HomeIcon, current: true },
  {
    name: "Recipes",
    href: "recipes",
    icon: ViewGridIconOutline,
    current: false,
  },
  { name: "Meal", href: "meals", icon: UserCircleIcon, current: false },
  { name: "My Account", href: "profile", icon: UserCircleIcon, current: false },
  // { name: 'Photos', href: '#', icon: PhotographIcon, current: true },
  // { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
  // { name: 'Albums', href: '#', icon: CollectionIcon, current: false },
  // { name: 'Settings', href: '#', icon: CogIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
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
  // More files...
];
const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    "Uploaded by": "Marie Culver",
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
    Resolution: "72 x 72",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    HeartIcon,
    MenuAlt2Icon,
    PencilIcon,
    PlusIconOutline,
    PlusIconSolid,
    SearchIcon,
    ViewGridIconSolid,
    ViewListIcon,
    XIcon,
  },
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      navigation,
      userNavigation,
      tabs,
      files,
      currentFile,
      mobileMenuOpen,
    };
  },
  methods: {
    async signOut() {
      await signOutUser();
      this.$router.push("/");
    },
  },
};
</script>
