import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import VueSmoothScroll from "v-smooth-scroll";
import { createApp } from "vue";
import { Store } from "./Config/Vuex.vue";

const app = createApp(App);
app.AOS = new AOS.init();

app.use(Store);
app.use(VueSmoothScroll);
app.use(AOS).mount("#app");
