<template>
    <BaseModal id="add-person" v-bind="modalProps">
        <PersonForm :onSuccess="personStore.addPerson" :onClose="closeModal" />
    </BaseModal>
    <BaseModal id="edit-person" v-bind="modalProps">
        <PersonForm :onSuccess="personStore.editPerson" :onClose="closeModal" />
    </BaseModal>
</template>

<script setup lang="ts">

import PersonForm from '@/components/forms/PersonForm/PersonForm.vue';
import BaseModal from '@/components/Modal/BaseModal.vue';
import { personStore } from '@/stores/usePersonStore';
import { uiStore } from '@/stores/useUiStore/useUiStore';
import { computed, watch } from 'vue';

const { modalStore: { closeModal, modalState } } = uiStore


const modalProps = computed(() => ({
    currentModalId: modalState.currentModal,
    class: 'modal',
    closeModal
}))

watch(() => modalState.currentModal, (data) => {
    console.log(data)
})

</script>

<style scoped>
.modal {
    max-width: 1400px;
}
</style>