<script setup>
import SectionTitle from "../Atoms/SectionTitle.vue";
import SectionSubTitle from "../Atoms/SectionSubTitle.vue";
import ProjectCard from "../Molecules/ProjectCard.vue";
</script>

<template>
  <section
    id="projects"
    class="w-full flex justify-center flex-col gap-24 items-center"
  >
    <div
      data-aos="fade-up"
      class="flex flex-col justify-center items-center gap-10"
    >
      <SectionTitle>Projects</SectionTitle>
      <SectionSubTitle>Things I’ve built so far</SectionSubTitle>
    </div>
    <div
      class="grid justify-center md:grid-cols-2 items-center xl:grid-cols-3 gap-y-16 gap-x-20"
    >
      <ProjectCard
        title="Calories Counter"
        desc="calorie counter web app, if you know this web app is similar to myfitnespal for example, and uses nutritionix as a food data api"
        stack="Vue, Tailwind"
        liveLink="https://calories-counters.vercel.app"
        codeLink="https://github.com/MFaqihRidho/calories-counter"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/CaloriesCounter.png"
            alt="project calories counter"
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="Quran Web App Next js"
        desc="the same as the quran web app on the other side only using next js"
        stack="Next, Tailwind"
        liveLink="https://quran-app-nextjs.vercel.app/"
        codeLink="https://github.com/MFaqihRidho/quran-app-nextjs"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/QuranWebAppNext.png"
            alt=""
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="Quran Web App"
        desc="Quran web app with cool ui, can bookmark your verses, and also mark your last reading, may Allah bless you Muslims"
        stack="React, Tailwind"
        liveLink="https://quran-web-app.vercel.app/"
        codeLink="https://github.com/MFaqihRidho/quran-app"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/QuranWebApp.png"
            alt=""
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="To Do List Matrix Eisenhower Finder"
        desc="if you don't know i'm using matrix eisenhower so it can increase your productivity.The Eisenhower Matrix is a productivity, prioritization, and time-management framework designed to help you prioritize a list of tasks or agenda items by first categorizing those items according to their urgency and importance."
        stack="React, Tailwind, Firebase"
        liveLink="https://to-do-list-matrix.vercel.app/"
        codeLink="https://github.com/MFaqihRidho/to-do-list"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/ToDoList.png"
            alt=""
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="Anime Finder"
        desc="This is an alternative for you who bored with MyAnimelist Ui, so i made this website for you who want to check your favorite anime rating, trailer, review, etc"
        stack="React, Tailwind, Redux"
        liveLink="https://animefinder.vercel.app/"
        codeLink="https://github.com/MFaqihRidho/animedb-website"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/AnimeFinder.png"
            alt=""
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="Movie Finder"
        desc="This is an alternative for you who bored with IMDB Ui, so i made this website for you who want to check your favorite Movie rating, trailer, etc"
        stack="React, Tailwind"
        liveLink="https://movie-finder-website.vercel.app/"
        codeLink="https://github.com/MFaqihRidho/moviedb-website"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/MovieFinder.png"
            alt=""
          /> </template
      ></ProjectCard>
    </div>
  </section>
</template>
