<script setup>
import { animate } from "motion";
import axios from "axios";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  animate(
    ".textIntro",
    { y: ["-20px", "0px", "0px", "20px"], opacity: [0, 1, 1, 0] },
    {
      duration: store.state.textIntro1Duration,
      easing: "ease-in-out",
    }
  );
  animate(
    ".textIntro2",
    { y: ["-20px", "0px", "0px", "0px", "20px"], opacity: [0, 1, , 1, 1, 0] },
    {
      duration: store.state.textIntro2Duration,
      easing: "ease-in-out",
      delay: store.state.textIntro1Duration,
    }
  );
  animate(
    ".intro",
    { y: ["0px", -window.innerHeight] },
    {
      duration: store.state.intro1Duration,
      easing: "ease-in-out",
      delay: store.getters.getIntroDelay,
    }
  );
  animate(
    ".intro2",
    { y: ["0px", -window.innerHeight] },
    {
      duration: store.state.intro2Duration,
      easing: "ease-in-out",
      delay: 1 + store.getters.getIntroDelay,
    }
  );
});
</script>

<template>
  <div class="fixed intro top-0 right-0 left-0 z-40">
    <div
      class="fixed flex flex-col px-5 justify-center items-center intro top-0 right-0 left-0 z-40 w-screen h-screen bg-lightMode dark:bg-darkMode"
    >
      <p class="text-2xl text-center uppercase textIntro">
        I love convert cool design into code
      </p>
      <p class="text-2xl text-center px-5 uppercase textIntro2">
        {{ dataCandaan }}
      </p>
    </div>
    <div
      class="fixed intro2 top-0 right-0 left-0 z-20 w-screen h-screen bg-gradient-to-r from-leftGradient to-rightGradient"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return { dataCandaan: "" };
  },
  mounted() {
    axios
      .get("https://candaan-api.vercel.app/api/text/random")
      .then((res) => (this.dataCandaan = res.data.data));
  },
};
</script>
