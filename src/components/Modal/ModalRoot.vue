<template>
    <base-modal id="add-person" v-bind="modalProps">
        <person-add-form :onSuccess="addPersonHandler" />
    </base-modal>
    <base-modal id="edit-person" v-bind="modalProps">
        <person-edit-form :onSuccess="editPersonHandler" :initFormData="modalState.tempData.content" />
    </base-modal>
</template>

<script setup lang="ts">

import PersonAddForm from '@/components/forms/PersonAddForm.vue';
import PersonEditForm from '@/components/forms/PersonEditForm.vue';
import BaseModal from '@/components/Modal/BaseModal.vue';
import { personStore, type Person } from '@/stores/usePersonStore';
import { uiStore } from '@/stores/useUiStore/useUiStore';
import { computed } from 'vue';

const { modalStore: { closeModal, modalState } } = uiStore


const modalProps = computed(() => ({
    currentModalId: modalState.currentModal,
    class: 'modal',
    closeModal
}))

const addPersonHandler = (data: Person) => {
    personStore.addPerson(data)
    closeModal()
}

const editPersonHandler = (data: Person) => {
    personStore.editPerson(data)
    closeModal()
}


</script>

<style scoped>
.modal {
    max-width: 1400px;
}
</style>