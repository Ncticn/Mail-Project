<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import ToggleSwitch from 'primevue/toggleswitch';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';
import Select from 'primevue/select';
import DialogAddNewMember from '@/components/dialog/DialogAddNewMember.vue';
import ConfirmDialogDeleteMember from '@/components/dialog/ConfirmDialogDeleteMember.vue';

import { useMembers } from '@/services/use-members';
const { members, error, loadMembers } = useMembers();

onMounted(
    () => {
        loadMembers();
    }
)


const route = useRoute();
const mailListEditCheck = ref(false);

function saveNewMailListDetails() {
    mailListEditCheck.value = false;
}
const listMembers = ref([]);
listMembers.value = loadMembers();

const mailDetails = ref(
    {
        listName: {
            title: 'Mail List Name',
            type: String,
            value: 'Sonkullan Users',
            ınputId: 'mail-list-name'
        },
        listMembers: {
            title: 'Members',
            type: Number,
            value: 798,
            ınputId: 'mail-list-members'
        },
        listEmails: {
            title: 'Emails',
            type: Number,
            value : 135,
            ınputId: 'mail-list-emails'
        },
        listCategory: {
            title: 'Category',
            type: String,
            value : 'Sonkullan In The Campaign',
            ınputId: 'mail-list-category'
        },
        listInTheCampaign: {
            title: 'In The Campaign',
            type: String,
            value : 'Sonkullan Purchase',
            ınputId: 'mail-list-in-the-campaign'
        },
        listCreated: {
            title: 'Created',
            type: String,
            value : '2024-11-23',
            ınputId: 'mail-list-created'
        },
    },
)
const dt = ref();
const selectedMember = ref();
const editingRows = ref([]);
const categories = ref([
    {label: 'Sonkullan' , value: 'Sonkullan'},
    {label: 'Eczastok' , value: 'Eczastok'},
    {label: 'Dentstok' , value: 'Dentstok'},
    {label: 'Vetstok' , value: 'Vetstok'},
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
const onRowEditSave = (event) => {
    let { newData, index } = event;

};

</script>
<template>
    <div class="mailing-list-details flex flex-col gap-8">
        <div class="mailing-list-detail-header flex items-stretch justify-between">
            <h1 class="text-2xl font-bold text-indigo-700">Mail List Details - Mail Lists ID: {{ route.params.id }}</h1>
            <div class="flex items-center justify-start gap-2 mb-2">
                <label for="mail-list-edit-check" class="ml-auto">Düzenle</label>
                <ToggleSwitch input-id="mail-list-edit-check"
                v-model="mailListEditCheck" :disabled="mailListEditCheck" />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div v-for="(detail, index) in mailDetails" :class="['form-group', detail.ınputId === 'mail-list-name' || detail.ınputId === 'mail-list-created' ? 'col-span-2' : '']" :key="index">
                <label class="font-semibold text-xl inline-block mb-1" :for="detail.ınputId">{{ detail.title }}</label>
                <p v-if="!mailListEditCheck" class="text-lg">{{ detail.value }}</p>
                <InputText v-if="detail.type === String & mailListEditCheck" :id="detail.ınputId" class="block w-full" v-model="detail.value"/>
                <InputNumber v-if="detail.type === Number & mailListEditCheck" :id="detail.ınputId" class="block w-full" v-model="detail.value"/>
            </div>
            <Button v-if="mailListEditCheck" type="button" label="Cancel" outlined @click="mailListEditCheck = false" />
            <Button v-if="mailListEditCheck" type="button" label="Save" @click="saveNewMailListDetails()" />
        </div>
        
        <div class="mailing-lists-details-table space-y-3">

            <DataTable ref="dt"
            
            columnResizeMode="fit" showGridlines
            v-model:selection="selectedMember"
            v-model:editing-rows="editingRows"
            :value="members"
            :rows="10"
            data-key="id"
            :paginator="true"
            paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            edit-mode="row"
            @row-edit-save="onRowEditSave"
            >

                <template #header>
                    <div class="flex flex-wrap gap-2 items-stretch justify-between">
                        <h4 class="m-0">Kullanıcı Tablosu</h4>

                        <div class="text-end">
                            <DialogAddNewMember />
                            <ConfirmDialogDeleteMember/>
                            <Button icon="pi pi-download" class="mr-2 !size-9" severity="info" text rounded />
                            <Button icon="pi pi-upload" class="mr-2 !size-9" severity="help" text rounded @click="exportXLSX($event)" />
                        </div>
                    </div>
                </template>
                <Column selection-mode="multiple" :exportable="false"></Column>
                <Column field="name" header="Name">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" fluid />
                    </template>
                </Column>
                <Column field="surname" header="Surname">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" fluid />
                    </template>
                </Column>
                <Column field="gender" header="Gender">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" fluid />
                    </template>
                </Column>
                <Column field="email" header="Email Address">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" fluid />
                    </template>
                </Column>
                <Column field="phone" header="Phone">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" fluid />
                    </template>
                </Column>
                <Column field="category" header="Category">
                    <template #editor=" {data, field} ">
                        <Select v-model="data[field]" :options="categories" option-label="label" option-value="value" placeholder="Select a Category" fluid>
                            <template #option="slotProps">
                                <Tag :value="slotProps.option.value" :severity="getCategoriesLabel(slotProps.option.value)"/>
                            </template>
                        </Select>
                    </template>
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.category" :severity="getCategoriesLabel(slotProps.data.category)"/>
                    </template>
                </Column>
                <Column field="rating" header="Rating">
                    <template #body="slotProps">
                        <Rating :model-value="slotProps.data.rating" readonly/>
                    </template>
                    <template #editor="{data,field}">
                        <Rating v-model="data[field]"/>
                    </template>
                </Column>
                <Column row-editor :exportable="false" class="text-center" />
            </DataTable>

        </div>


    </div>
</template>