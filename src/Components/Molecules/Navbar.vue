<script setup>
import SocialMedia from "./SocialMedia.vue";
import NavLink from "./NavLink.vue";
import MobileNav from "./MobileNav.vue";

import { useStore } from "vuex";
import { onMounted } from "vue";
import { animate } from "motion";

const store = useStore();

onMounted(() => {
  animate(
    ".navbar",
    { x: ["100px", "0px"], opacity: [0, 1] },
    {
      duration: store.state.navbarDuration,
      easing: "ease-out",
      delay: store.getters.getNavbarDelay,
    }
  );
  animate(
    ".logo-navbar",
    { x: ["-100px", "0px"], opacity: [0, 1] },
    {
      duration: store.state.navbarDuration,
      easing: "ease-out",
      delay: store.getters.getNavbarDelay,
    }
  );
});
</script>

<template>
  <nav id="home" class="flex justify-between items-center">
    <img
      class="w-24 h-24 logo-navbar"
      src="../../Assets/Icons/logo.png"
      alt="logo"
    />
    <div class="flex gap-12 navbar items-center">
      <NavLink />
      <SocialMedia class="hidden md:flex" />
      <button @click="toggle()" class="lg:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <MobileNav @link-click="toggle" :open="open" />
    <div
      @click="toggle()"
      :class="`w-full right-0 left-0 h-screen top-0 ${
        open ? 'inline-block' : 'hidden'
      } fixed lg:hidden bg-black opacity-50 z-40`"
    ></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
