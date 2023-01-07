<script>
import { createStore } from "vuex";

const Store = createStore({
  state() {
    return {
      textIntro1Duration: 3,
      textIntro2Duration: 4,
      intro1Duration: 2,
      intro2Duration: 2,
      navbarDuration: 1,
      heroTextDuration: 2,
    };
  },
  getters: {
    getIntroDelay(state) {
      return state.textIntro1Duration + state.textIntro2Duration;
    },
    getNavbarDelay(state, getters) {
      return getters.getIntroDelay + state.intro1Duration;
    },
    getHeroTextDelay(state, getters) {
      return getters.getNavbarDelay + state.navbarDuration;
    },
  },
});

export { Store };
</script>
