<script setup>
import SpeedDial from "primevue/speeddial";
import Toast from "primevue/toast";

import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

const items = ref([
  {
    label: "Delete",
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
    label: "Refresh",
    icon: "pi pi-refresh",
    command: () => {
      router.push("/contact");
    },
  },
  {
    label: "Update",
    icon: "pi pi-pencil",
    command: () => {
      toast.add({
        severity: 'success',
        summary: "Update",
        detail: "Data Updated",
        life: 2000,
      });
    },
  },
  {
    label: "Vue Website",
    icon: "pi pi-chevron-right",
    // command: () => {
    //   window.location.href = "https://vuejs.org/";
    // },
  },
]);
</script>
<template>
  <SpeedDial
    :model="items"
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
</template>
