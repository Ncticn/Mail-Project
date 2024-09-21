<script setup>
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";

import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";
const { t } = useI18n();


const items = ref([
  {
    label: t('component.header.mailing-lists'),
    icon: "pi pi-address-book",
    url: "/mailing-lists",
  },
  {
    label: t('component.header.campaigns'),
    icon: "pi pi-star",
    url: "/campaigns",
  },
  {
    label: t('component.header.email-templates'),
    icon: "pi pi-file-edit",
    url: "/email-templates",
  },
  {
    label: t('component.header.contact'),
    icon: "pi pi-phone",
    url: "/contact",
  },
]);
</script>

<template>
  <div class="navbar">
    <Menubar
      :model="items"
      class="bg-white mb-16 px-8 py-6 justify-between border-white !rounded-3xl"
    >
      <template #start>
        <div class="flex items-center justify-center gap-2">
          <a
            href="/"
            class="bg-gradient-to-r from-violet-800 to-violet-700 py-1 px-2 rounded-lg text-white"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="/" class="text-3xl text-blue-950 font-bold">Mailinks</a>
        </div>
      </template>
      <template #item="{ item, props }">
        <RouterLink :to="item.url">
          <a
            class="flex items-center justify-start md:justify-end font-semibold text-zinc-500 hover:text-violet-800"
            v-bind="props.action"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </RouterLink>
      </template>
    </Menubar>
  </div>
</template>
