import "@/assets/css/tailwind.css"

import { createApp } from "vue";
import { createI18n, useI18n  } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "./presets/aura";
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import "primeicons/primeicons.css";

import TR from '@/i18n/tr.json'
import EN from '@/i18n/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'TR',
  fallbackLocale: 'EN',
  messages: {
    TR: TR,
    EN: EN
  }
});

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
  ripple: true,
});
app.use(ConfirmationService);
app.use(ToastService);
app.use(i18n);
app.mount("#app");
