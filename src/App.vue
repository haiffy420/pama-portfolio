<script setup>
import Navbar from "./Components/Molecules/Navbar.vue";
import MainLayout from "./Components/Layouts/MainLayout.vue";
import Hero from "./Components/Organism/Hero.vue";
import About from "./Components/Organism/About.vue";
import Skills from "./Components/Organism/Skills.vue";
import Projects from "./Components/Organism/Projects.vue";
import Contact from "./Components/Organism/Contact.vue";
import Footer from "./Components/Organism/Footer.vue";
import Intro from "./Components/Molecules/Intro.vue";
import BackToTopButton from "./Components/Atoms/BackToTopButton.vue";
</script>

<template>
  <div
    class="bg-lightMode selection:bg-leftGradient dark:bg-darkMode flex items-center justify-center"
  >
    <MainLayout>
      <Intro />
      <BackToTopButton />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </MainLayout>
  </div>
</template>
