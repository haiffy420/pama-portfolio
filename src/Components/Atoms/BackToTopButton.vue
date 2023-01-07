<template>
  <a
    href="#home"
    v-smooth-scroll
    :class="`fixed ${
      scY ? 'opacity-100' : 'opacity-0'
    } bottom-10 flex transition-all duration-300 items-center justify-center right-10 md:bottom-24 md:right-24 rounded-full z-30 bg-gradient-to-r p-1 from-leftGradient to-rightGradient w-14 h-14`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-10 dark:text-primaryDark text-lightMode"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 11l7-7 7 7M5 19l7-7 7 7"
      />
    </svg>
  </a>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },
};
</script>
