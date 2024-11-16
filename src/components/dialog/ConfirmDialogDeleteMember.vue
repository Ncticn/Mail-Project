<script setup>
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";


const confirm = useConfirm();
const toast = useToast();

const requireConfirmation = () => {
    confirm.require({
        group: 'headless',
        header: 'Are you sure?',
        message: 'Please confirm to proceed.',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>
<template>
    <div class="confirm-dialog-delete-member inline-block">
        <Button icon="pi pi-trash" class="mr-2 !size-9" severity="danger" text rounded @click="requireConfirmation()" />
        <ConfirmDialog group="headless">
            <template #container="{ message, acceptCallback, rejectCallback }">
                <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                    <div class="rounded-full bg-red-500 text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                        <i class="pi pi-trash text-5xl"></i>
                    </div>
                    <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                    <p class="mb-0">{{ message.message }}</p>
                    <div class="flex items-center gap-2 mt-6">
                        <Button label="Cancel" class="text-red-500 border-red-500 focus:outline-red-500 focus:outline-1" text @click="rejectCallback"></Button>
                        <Button label="Save" class="bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500 focus:outline-red-500 focus:outline-1" @click="acceptCallback"></Button>
                    </div>
                </div>
            </template>
        </ConfirmDialog>
        <Toast />
    </div>


</template>