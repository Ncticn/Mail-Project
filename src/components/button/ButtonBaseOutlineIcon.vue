<script setup>
import Button from "primevue/button";
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "Button",
  },
  link: {
    type: String,
    default: null,
  },
  textColor: {
    type: String,
    default: "text-violet-800 hover:text-white",
  },
  borderColor: {
    type: String,
    default: "border-violet-800 hover:border-violet-800",
  },
  bgColor: {
    type: String,
    default: "bg-transparent hover:bg-violet-800",
  },
  icon: {
    type: String,
    default: "pi pi-user",
  },
  iconPos: {
    type: String,
    default: "left",
  },
  event: {
    type: Function,
  }
});
</script>

<template>
  <Button
    :label="`${label}`"
    :class="bgColor + ' ' + textColor + ' ' + borderColor"
    class="border group"
    :icon="`${icon} p-1 rounded-full !m-0 p-1.5 bg-violet-800 text-white group-hover:bg-white group-hover:text-violet-800`"
    :iconPos="iconPos"
    v-on:click="event"
    rounded
  />
</template>
