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
});



</script>

<template>
  <Button
    :label="`${label}`"
    :class="`${bgColor} ${textColor} ${borderColor}`"
    class="border p-1"
    rounded
  />
</template>
