<script setup>
import Experience from "../Molecules/Experience.vue";
import SectionTitle from "../Atoms/SectionTitle.vue";
</script>

<template>
  <section
    id="about"
    class="flex flex-col justify-center text-center xl:text-start items-center xl:flex-row xl:justify-between xl:items-start gap-14 xl:gap-9"
  >
    <div
      data-aos="fade-right"
      class="flex gap-9 min-h-[200px] flex-col items-center"
    >
      <SectionTitle> About Me </SectionTitle>
      <p class="font-medium text-xl max-w-[800px]">
        You can call me Pama, I'm a 3rd semester undergraduate informatics
        student at the Faculty of Engineering and Computer Science, University
        of Muhammadiyah Pekajangan Pejalongan. As well as an exchange student at
        the Asia University of Taiwan
      </p>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="4000"
      class="flex gap-9 flex-col items-center"
    >
      <SectionTitle> Education </SectionTitle>
      <Experience
        title="UM of Pekajangan Pekalongan"
        company="Facculty of Engineering and Computer Science"
        location="Kajen"
        date="2021 - Present"
        contract="Undergraduate"
      />
      <Experience
        title="Asia University of Taiwan"
        company="Facculty of Humanities and Social Sciences"
        location="Remote"
        date="2022 - Present"
        contract="Undergraduate"
      />
    </div>
  </section>
</template>
