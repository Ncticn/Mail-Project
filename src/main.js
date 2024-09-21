import "@/assets/css/tailwind.css"

import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "./presets/aura";
import ToastService from 'primevue/toastservice';
import "primeicons/primeicons.css";

const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        hello: 'Hello World!'
      }
    },
    tr: {
      message: {
        hello: 'Merhaba Dünya!'
      }
    }
  }
});

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
  ripple: true,
});
app.use(ToastService);
app.use(i18n);
app.mount("#app");
