<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from "vue";
import { animate } from "motion";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  animate(
    ".heroText",
    { x: [-200, 0], opacity: [0, 1] },
    {
      delay: store.getters.getNavbarDelay,
      duration: store.state.heroTextDuration,
    }
  );
  animate(
    ".heroName",
    { x: [-200, 0], opacity: [0, 1] },
    {
      delay: store.getters.getNavbarDelay + 0.5,
      duration: store.state.heroTextDuration,
    }
  );
  animate(
    ".heroImage",
    { x: [200, 0], opacity: [0, 1] },
    {
      delay: store.getters.getNavbarDelay + 0.5,
      duration: store.state.heroTextDuration,
    }
  );
});
</script>

<template>
  <section
    class="flex gap-10 lg:gap-0 lg:flex-row flex-col-reverse w-full items-center justify-between"
  >
    <div
      class="text-center leading-9 text-4xl lg:text-start md:text-5xl xl:text-[58px] xl:leading-[70px] font-bold text-primary dark:text-primaryDark"
    >
      <h1 class="heroText">
        Hi 👋, <br />
        My name is<br />
      </h1>

      <h1
        class="text-transparent md:block hidden heroName bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
      >
        Rizkiyan Tri Ade Pama
      </h1>
      <h1
        class="text-transparent block md:hidden heroName bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
      >
        Rizkiyan Tri Ade Pama
      </h1>
      <h1 class="heroText heroProf">Front-End Developer</h1>
    </div>

    <div
      class="h-86 w-428 heroImage xl:h-[350px] xl:w-[350px] lg:h-[250px] lg:w-[250px] bg-gradient-to-t from-leftGradient to-rightGradient p-2 overflow-hidden rounded-full"
    >
      <img
        class="rounded-full w-full h-full object-cover"
        src="../../Assets/Images/profile.jpg"
        alt="profile"
      />
    </div>
  </section>
</template>
