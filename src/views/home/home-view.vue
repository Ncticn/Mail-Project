<script setup>
import ButtonBase from "@/components/button/ButtonBase.vue";
import ButtonBaseIcon from "@/components/button/ButtonBaseIcon.vue";
import ButtonBaseOutline from "@/components/button/ButtonBaseOutline.vue";
import ButtonBaseOutlineIcon from "@/components/button/ButtonBaseOutlineIcon.vue";
import ButtonSpeedDial from "@/components/button/ButtonSpeedDial.vue";
import FilterSorting from "@/components/filter/FilterSorting.vue";



</script>

<template>
  <main>
    <ButtonBase label="Click Me" />
    <ButtonBaseIcon label="Click Me" />
    <ButtonBaseOutline :label="'Click Me'" />
    <ButtonBaseOutlineIcon :label="'Click Me'" />
    <FilterSorting />
    <div class="w-full h-56 relative flex flex-col items-start justify-start gap-4">
      <h1>Merhabalar</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae ad facilis consequatur culpa. Laudantium voluptatem illo, tempora, mollitia atque corporis numquam optio, omnis amet autem debitis culpa commodi sed cum saepe temporibus dolorum. Accusamus exercitationem, obcaecati velit fuga eos cupiditate harum. Aut nam sit corrupti libero eveniet voluptate vitae.</p>
      <ButtonSpeedDial />

      <h1>{{ $t('message.hello') }}</h1>
    </div>


  </main>
</template>
