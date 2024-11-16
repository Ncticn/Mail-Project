<script setup>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import InputMask from 'primevue/inputmask';
import Select from 'primevue/select';
import Tag from 'primevue/tag';
import Rating from 'primevue/rating';

import { ref } from 'vue';

const isVisible = ref(false);

const categories = ref([
    { label: 'Sonkullan', value: 'Sonkullan' },
    { label: 'Eczastok', value: 'Eczastok' },
    { label: 'Dentstok', value: 'Dentstok' },
    { label: 'Vetstok', value: 'Vetstok' },
]);
const getCategoriesLabel = (status) => {
    switch (status) {
        case "Sonkullan":
            return "warn";

        case 'Eczastok':
            return 'danger';

        case 'Dentstok':
            return 'info';

        case 'Vetstok':
            return 'success';

        default:
            return null;
    }
}
const newUserData = ref(
    {
        name: null,
        surname: null,
        gender: null,
        email_address: null,
        phone: null,
        category: null,
        rating: null,
    }
);
const completedData = ref({});
</script>
<template>
    <div class="dialog-add-new-member inline-block">
        <Button icon="pi pi-plus" class="mr-2 !size-9" severity="success" size="small" text rounded @click="isVisible = true" />
        <Dialog id="add-new-member-dialog" v-model:visible="isVisible" modal :style="{ width: '25rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <i class="fa-solid fa-user-plus"></i>
                    <span class="font-bold whitespace-nowrap">Yeni Kullanıcı Ekle</span>
                </div>
            </template>

            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 flex flex-col gap-2">
                    <label for="new-user-rating" class="font-semibold">Rating</label>
                    <Rating v-model="newUserData.rating" id="new-user-rating" />
                </div>
                <div class="col-span-1 card flex flex-col gap-2">
                    <label for="new-user-name" class="font-semibold">Name</label>
                    <InputText v-model="newUserData.name" id="new-user-name" type="text" placeholder="Name" />
                </div>
                <div class="col-span-1 card flex flex-col gap-2">
                    <label for="new-user-surname" class="font-semibold">Surname</label>
                    <InputText v-model="newUserData.surname" id="new-user-surname" type="text" placeholder="Surname" />
                </div>

                <div class="col-span-2 flex flex-col gap-2">
                    <label for="new-user-email-address" class="font-semibold">Email Address</label>
                    <InputText v-model="newUserData.email_address" id="new-user-email-address" type="email"
                        placeholder="Email Address" />
                </div>
                <div class="col-span-2 flex flex-col gap-2">
                    <label for="new-user-phone" class="font-semibold">Phone</label>
                    <InputMask v-model="newUserData.phone" id="new-user-phone" mask="0 (999) 999 99 99"
                        placeholder="0 (546) 789 01 23" />
                </div>
                <div class="col-span-2 card flex flex-col gap-2">
                    <label class="font-semibold">Gender</label>
                    <div class="space-x-6">
                        <div class="space-x-2 inline-block">
                            <RadioButton v-model="newUserData.gender" name="newUserGender" input-id="new-user-men"
                                value="Men" class="inline-block" />
                            <label for="new-user-men">Men</label>
                        </div>
                        <div class="space-x-2 inline-block">
                            <RadioButton v-model="newUserData.gender" name="newUserGender" input-id="new-user-women"
                                value="Women" class="inline-block" />
                            <label for="new-user-women">Women</label>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 flex flex-col gap-2">
                    <label for="new-user-category" class="font-semibold">Category</label>
                    <Select v-model="newUserData.category" :options="categories" optionLabel="label"
                        placeholder="Select a Category" id="new-user-category" class="w-full">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option.value"
                                :severity="getCategoriesLabel(slotProps.option.value)" />
                        </template>
                    </Select>
                </div>
            </div>

            <div class="flex justify-end gap-2 my-4">
                <Button type="button" label="Cancel" @click="isVisible = false" outlined></Button>
                <Button type="button" label="Save" @click="completedData = newUserData"></Button>
            </div>
        </Dialog>
    </div>
</template>