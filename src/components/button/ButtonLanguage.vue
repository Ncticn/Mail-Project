<script setup>
import Button from "primevue/button";
import Menu from "primevue/menu";

import TurkiyeFlag from '@/assets/img/laguages-support-flags/turkiye-flag.png'
import UnitedKingdomFlag from '@/assets/img/laguages-support-flags/united-kingdom-flag.png'

import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";


const i18n = useI18n();

const menuLanguagesPopUp = ref();
const userLanguage = navigator.language;

const languages = ref([
    {
        label: 'Turkish',
        icon: TurkiyeFlag,
        code: 'TR',
        selected: false,
        command: (event) => {
            selectedLanguage(event.item)
        },

    },
    {
        label: 'English',
        icon: UnitedKingdomFlag,
        code: 'EN',
        selected: false,
        command: (event) => {
            selectedLanguage(event.item)
        },
    },
]);

const toggle = (event) => {
    menuLanguagesPopUp.value.toggle(event);
}

const setInitialLanguage = () => {
    if (localStorage.getItem("lang")) {
        const currentLang = localStorage.getItem("lang");
        selectedLanguage(languages.value.find(lang => lang.code === currentLang));
    } else {
        if (!localStorage.getItem("lang")) {
            const defaultLang = languages.value.find(lang => lang.code === userLanguage.substring(0, userLanguage.indexOf("-")).toUpperCase());
            selectedLanguage(defaultLang);
        } else {
            selectedLanguage(languages.value.find(lang => lang.code))
        }
    }
}

const selectedLanguage = (lang) => {
    languages.value.forEach(language => {
        language.selected = false;
    });
    lang.selected = true;
    i18n.locale.value = lang.code;
    localStorage.setItem("lang", i18n.locale.value);
}

onMounted(() => {
    setInitialLanguage();
});

</script>
<template>
    <Button rounded class="!p-2 relative bg-transparent border-none text-white ml-4" @click="toggle" aria-haspopup
        aria-controls="languages_menu">
        <i class="fa-solid fa-language"></i>
    </Button>
    <Menu ref="menuLanguagesPopUp" :model="languages" id="languages_menu" class="!z-[9999] mt-2" popup>
        <template #item="{ item, props }">
            <a v-bind="props.action">
                <img :src="item.icon" class="max-w-6 object-contain">
                <span class="ml-2">{{ item.label }}</span>
                <i v-if="item.selected" class="pi pi-check ml-auto"></i>
            </a>
        </template>
    </Menu>

</template>