<script setup>
import { ref } from "vue";
import Brand from "../brand/Brand.vue";

const items = ref({
  socialIcons: [
    {
      icon: "fa-brands fa-facebook-f",
      url: "https://www.facebook.com/",
    },
    {
      icon: "fa-brands fa-twitter",
      url: "https://x.com/",
    },
    {
      icon: "fa-brands fa-github",
      url: "https://github.com/Ncticn/Mail-Project",
    },
    {
      icon: "fa-brands fa-instagram",
      url: "https://www.facebook.com/",
    },
  ],
});
</script>
<template>
  <div class="footer">
    <div class="bg-white mb-16 p-6 md:px-8 md:py-6 border-white rounded-3xl">
      <div
        class="grid grid-cols-3 gap-5 md:gap-8 mx-auto justify-center items-center"
      >
        <div class="footer-brand col-span-3 md:col-span-1">
          <Brand :position="'justify-center md:justify-start'" />
        </div>
        <div class="footer-copyright col-span-3 md:col-span-1">
          <p class="text-xs text-center my-auto"> {{ $t('component.footer.copyright') }}
          </p>
        </div>
        <div class="footer-social-icons col-span-3 md:col-span-1">
          <div class="flex gap-2 items-center justify-center md:justify-end">
            <a
              :href="item.url"
              v-for="item in items.socialIcons"
              :key="item.id"
              target="_blank"
            >
              <i
                :class="item.icon"
                class="w-7 h-7 text-lg flex items-center justify-center text-violet-950 transition-all rounded-full border-violet-950 border bg-white text-center hover:text-white hover:bg-violet-950 hover:border-violet-950"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
