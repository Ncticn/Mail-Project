<script setup>
import Select from "primevue/select";
import { getMailLists } from "@/services/use-mail_lists";
import { ref, onMounted, defineEmits, watch } from "vue";

const selectedFilter = ref(null);

const filters = ref([
  { name: "Mail List Name (A-Z)", sortFunction: (a, b) => a.list_name.localeCompare(b.list_name) },
  { name: "Mail List Name (Z-A)", sortFunction: (a, b) => b.list_name.localeCompare(a.list_name) },
  { name: "Date Created (Ascending)", sortFunction: (a, b) => new Date(a.created_at) - new Date(b.created_at) },
  { name: "Date Created (Descending)", sortFunction: (a, b) => new Date(b.created_at) - new Date(a.created_at) },
]);

const mailLists = ref([]);
const sortedMailLists = ref([]);

const emit = defineEmits(['updateList']);

onMounted(async () => {
  try {
    mailLists.value = await getMailLists();
    sortedMailLists.value = [...mailLists.value];
  } catch (error) {
    console.error("Mail listesi yüklenirken hata oluştu:", error);
  }
});

const sortingFilter = () => {
  if (!selectedFilter.value) {
    sortedMailLists.value = [...mailLists.value];
  } else {
    sortedMailLists.value = [...mailLists.value].sort(selectedFilter.value.sortFunction);
  }
};

watch(selectedFilter, () => {
  sortingFilter();
  emit('updateList', sortedMailLists.value);
});
</script>

<template>
  <div class="filter-sorting mr-4">
    <Select 
      v-model="selectedFilter" 
      inputId="sorting-filter" 
      :options="filters" 
      optionLabel="name"
      placeholder="Filter by Sorting" 
      class="w-full"
    />
  </div>
</template>
