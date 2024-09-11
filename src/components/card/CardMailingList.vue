<script setup>
import ButtonSpeedDial from '../button/ButtonSpeedDial.vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  emails: {
    type: Number,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div class="mailing-list__card">
    <a href="#" class="mailing-list-card-item relative h-full">
      <div
        class="mailing-list-card-item__header first-of-type:row-span-1 first-of-type:col-span-3"
        v-for="(prop, name) in $props"
        :key="prop.id"
      >
        <h2 class="mailing-list-card-item-header__title">{{ name }}</h2>
        <h3>{{ prop }}</h3>
      </div>
      <div
        class="mailing-list-card-item__buttons flex flex-col justify-between items-end gap-4"
      ></div>
      <ButtonSpeedDial/>
    </a>
  </div>
</template>
