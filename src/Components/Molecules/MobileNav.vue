<script setup>
import SocialMedia from "./SocialMedia.vue";
defineProps({
  open: Boolean,
});
</script>

<template>
  <div
    :class="`w-1/2 ${
      open ? ' left-0' : '-left-1/2'
    } dark:bg-darkMode bg-lightMode  h-screen transition-all duration-150 flex lg:hidden justify-between py-10 px-10 items-center flex-col fixed top-0 bottom-0 z-50`"
  >
    <div class="flex-col flex text-3xl gap-5">
      <a
        href="#home"
        @click="$emit('linkClick')"
        v-smooth-scroll
        class="home text-center"
        >Home</a
      >
      <a
        href="#about"
        @click="$emit('linkClick')"
        v-smooth-scroll
        class="about text-center"
        >About</a
      >
      <a
        href="#skills"
        @click="$emit('linkClick')"
        v-smooth-scroll
        class="skills text-center"
        >Skills</a
      >
      <a
        href="#projects"
        @click="$emit('linkClick')"
        v-smooth-scroll
        class="projects text-center"
        >Projects</a
      >
      <a
        href="#contact"
        @click="$emit('linkClick')"
        v-smooth-scroll
        class="contact text-center"
        >Contact</a
      >
    </div>
    <SocialMedia @click="$emit('linkClick')" />
  </div>
</template>
