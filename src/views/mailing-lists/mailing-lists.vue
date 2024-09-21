<script setup>
import CardMailingList from "@/components/card/CardMailingList.vue";
import FilterSorting from "@/components/filter/FilterSorting.vue";
import ButtonBaseOutlineIcon from "@/components/button/ButtonBaseOutlineIcon.vue";
import { ref, onMounted } from "vue";
import { getMailLists } from "@/services/use-mail_lists";

const mailingLists = ref([]);

onMounted(async () => {
  try {
    const data = await getMailLists();
    mailingLists.value = data.mailing_lists;
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div
    class="mailing-list bg-white rounded-3xl p-6 md:px-8 md:py-6 flex flex-col gap-10 mb-14"
  >
    <div
      class="mailing-list__header flex flex-col md:flex-row items-start justify-between gap-4"
    >
      <div class="mailing-list-header__title w-full">
        <h1 class="text-3xl font-semibold">{{ $t('page.mailing-lists.title')}}</h1>
        <i18n-t tag="h3" keypath="page.mailing-lists.subtitle" class="text-sm">
          <b class="text-violet-800"> {{ $t('page.mailing-lists.quantity', {quantity: mailingLists.length }) }}</b>
        </i18n-t>
      </div>
      <div
        class="mailing-list-header__buttons flex flex-col md:flex-row items-start justify-center md:justify-end w-full gap-4 md:gap-0"
      >
        <FilterSorting />
        <ButtonBaseOutlineIcon
          :label="'New Mailing List'"
          :icon="'pi pi-plus'"
          class="w-full md:w-fit"
        />
      </div>
    </div>

    <div class="mailing-list__main flex flex-col gap-4">
      <CardMailingList
        v-for="item in mailingLists"
        :key="item.id"
        :name="item.list_name"
        :members="item.total_subscribers"
        :emails="item.emails_sent"
        :created="item.created_at"
      />
    </div>
  </div>
</template>
