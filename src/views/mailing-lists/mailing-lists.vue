<script setup>
import CardMailingList from "@/components/card/CardMailingList.vue";
import FilterSorting from "@/components/filter/FilterSorting.vue";
import Button from "primevue/button";

import { getMailLists } from "@/services/use-mail_lists";
import { ref, onMounted } from "vue";

const sortedMailLists = ref([]);

// Veri yüklemesi (Mail listeleri) yapıldığında listeyi başlatmak
const loadMailLists = async () => {
  try {
    const mailLists = await getMailLists();
    sortedMailLists.value = mailLists; // İlk olarak sıralanmamış listeyi göstermek için atama yap
  } catch (error) {
    console.error("Mail listeleri yüklenirken hata oluştu:", error);
  }
};

// Bileşen yüklendiğinde veri çağrısı yap
onMounted(() => {
  loadMailLists();
});

// `FilterSorting` bileşeninden gelen güncellenmiş listeyi işlemek
const handleUpdateList = (updatedList) => {
  sortedMailLists.value = updatedList;
};
</script>

<template>
  <div class="mailing-list">
    <div class="mailing-list__header">
      <div class="mailing-list-header__title">
        <h1 class="text-3xl font-semibold">{{ $t('page.mailing-lists.title') }}</h1>
        <I18nT tag="h3" keypath="page.mailing-lists.subtitle" class="text-sm">
          <b class="text-violet-800"> {{ $t('page.mailing-lists.quantity', { quantity: sortedMailLists.length }) }}</b>
        </I18nT>
      </div>
      <div class="mailing-list-header__buttons">
        <FilterSorting @updateList="handleUpdateList"/>
        <Button label="Add New Mailing List" icon="pi pi-plus" iconPos="right" raised />
      </div>
    </div>

    <!-- Mail listesi kartları -->
    <div class="mailing-list__main flex flex-col gap-4">
      <CardMailingList v-for="item in sortedMailLists" :key="item.id" :name="item.list_name"
        :members="item.total_subscribers" :emails="item.emails_sent" :created="item.created_at" />
    </div>
  </div>
</template>

<style scoped>
.mailing-list {
  @apply bg-white rounded-3xl p-6 md:px-8 md:py-6 flex flex-col gap-10 mb-14;
}

.mailing-list__header {
  @apply flex flex-col md:flex-row items-start justify-between gap-4;
}

.mailing-list-header__title {
  @apply w-full
}

.mailing-list-header__buttons {
  @apply flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-end w-full gap-4 md:gap-0
}
</style>
