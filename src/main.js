import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from '@/presets/lara';
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
  ripple: true,
});

app.mount("#app");
