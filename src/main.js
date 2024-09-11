import "@/assets/css/tailwind.css"

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "./presets/aura";
import ToastService from 'primevue/toastservice';
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
  ripple: true,
});
app.use(ToastService);
app.mount("#app");
