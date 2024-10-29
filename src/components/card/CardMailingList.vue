<script setup>
import router from "@/router";
import SpeedDial from "primevue/speeddial";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

const toast = useToast();

const props = defineProps({
  itemId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  emails: {
    type: Number,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
});

const actions = ref([
  {
    label: "Sil",
    icon: "pi pi-trash",
    command: () => {
      toast.add({
        severity: "error",
        summary: "Delete",
        detail: "Data Deleted",
        life: 3000,
      });
    },
  },
  {
    label: "Yenile",
    icon: "pi pi-refresh",
    command: () => {
      location.reload();
    },
  },
  {
    label: "Düzenle",
    icon: "pi pi-pencil",
    command: () => {
      router.push({ path: `mailing-lists/${props.itemId}/details`})
    },
  },
  {
    label: "Posta Detayları",
    icon: "pi pi-chevron-right",
    command: () => {
      router.push({ path: `mailing-lists/${props.itemId}/details`})
    },
  },
]);


</script>

<template>
  <div class="mailing-list__card">
    <div class="mailing-list-card-item relative h-full w-full">
      <div
        class="mailing-list-card-item__header first-of-type:row-span-1 first-of-type:col-span-3"
        v-for="(prop, name) in props"
        :key="prop.id"
      >
        <h2 v-if="name !== 'itemId'" class="mailing-list-card-item-header__title">{{ name }}</h2>
        <h3 v-if="name !== 'itemId'">{{ prop }}</h3>
      </div>
      <div
        class="mailing-list-card-item__buttons flex flex-col justify-between items-end gap-4"
      ></div>
      <SpeedDial
        :model="actions"
        direction="down-left"
        :style="{ position: 'absolute', right: 0, top: '5px' }"
        type="quarter-circle"
        :radius="90"
        mask="true"
        mask-class="opacity-0 rounded-xl"
        button-class="bg-transparent text-violet-800 border-transparent hover:bg-transparent hover:border-transparent hover:text-violet-800"
        show-icon="pi pi-ellipsis-h"
        hide-icon="pi pi-times rotate-45"
        :tooltipOptions="{ position: 'right' }"
        class="!gap-0"
      />
      <Toast/>
    </div>
  </div>
</template>
