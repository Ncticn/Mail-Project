<script setup>
import Select from "primevue/select";
import { ref } from "vue";
const selectedFilter = ref("Filter by");
const filters = ref([
  { name: "Mail List Name (A-Z)" },
  { name: "Mail List Name (Z-A)" },
  { name: "Date created (Descending)" },
  { name: "Date created (Ascending)" },
]);
</script>
<template>
  <Select
    v-model="selectedFilter"
    :options="filters"
    optionLabel="name"
    placeholder="Filter by sort"
    class="w-full md:w-56 border-violet-800 p-1 font-sm mr-2 font-medium"
  />
</template>
