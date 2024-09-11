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
    default: "text-white",
  },
  borderColor: {
    type: String,
    default: "border-violet-800 hover:border-violet-700",
  },
  bgColor: {
    type: String,
    default: "bg-violet-800 hover:bg-violet-700",
  },
  icon: {
    typse: String,
    default: "pi pi-user",
  },
  iconPos: {
    typse: String,
    default: "left",
  }
});
</script>

<template>
  <Button
    :label="`${label}`"
    :class="bgColor + ' ' + textColor + ' ' + borderColor"
    class="border group"
    :icon="`${icon} p-1 rounded-full !m-0 p-1.5 group-hover:bg-white group-hover:text-violet-700`"
    :iconPos="iconPos"
    rounded
  />
</template>
