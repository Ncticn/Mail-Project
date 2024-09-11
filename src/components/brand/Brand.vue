<script setup>
const props = defineProps({
  position : {
    type: String,
    default: "justify-center"
  }
});
</script>
<template>
  <div class="flex items-center gap-2"
  :class="props.position">
    <div
      class="bg-gradient-to-r from-violet-800 to-violet-700 py-1 px-2 rounded-lg text-white inline-block"
    >
      <i class="fa-solid fa-envelope"></i>
    </div>
    <a href="/" class="text-3xl text-blue-950 font-bold">Mailinks</a>
  </div>
</template>
