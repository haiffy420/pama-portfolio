<script setup>
import SocialMedia from "../Molecules/SocialMedia.vue";
import NavLink from "../Molecules/NavLink.vue";
</script>

<template>
  <footer class="w-full flex flex-col gap-3 justify-center">
    <div class="flex w-full justify-between items-center">
      <div>
        <img
          class="w-24 h-24"
          src="../../Assets/Icons/logo.png"
          alt="logo-dark"
        />
      </div>
      <div class="flex gap-12 items-center text-primary dark:text-lightContent">
        <p class="font-DMSans text-lg">rizkypama3@gmail.com</p>
        <SocialMedia class="hidden md:flex" />
      </div>
    </div>
    <div class="w-full h-[1px] dark:bg-primary bg-darkContent"></div>
    <div class="flex h-24 gap-10 items-center justify-between w-full">
      <NavLink />
      <p class="text-lg">
        Designed and
        <a
          target="_blank"
          href="https://github.com/pavanmg007"
          class="text-transparent bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
        >
        </a>
        built by
        <a
          target="_blank"
          href="https://github.com/rizkypama"
          class="text-transparent bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
          >Rizkiyan Tri Ade Pama</a
        >
        with
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
          >Love</span
        >
        and
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
          >Coffe</span
        >
      </p>
    </div>
  </footer>
</template>
