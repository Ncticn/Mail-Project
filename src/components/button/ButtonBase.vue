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
});



</script>

<template>
  <Button
    :label="`${label}`"
    :class="`${bgColor} ${textColor} ${borderColor}`"
    class="border p-1"
    rounded
    raised
  />
</template>
