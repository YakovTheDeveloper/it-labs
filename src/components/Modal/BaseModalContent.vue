<template>
    <div class="modal-content" ref="element">
        <button-modal-close variant="icon" class="close-button" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import ButtonModalClose from '@/components/common/BaseButton/ButtonModalClose/ButtonModalClose.vue';
import { useOutsideClick } from '@/composables/useOutsideClick';
import { uiStore } from '@/stores/useUiStore/useUiStore';
import { ref } from 'vue';

const element = ref()

useOutsideClick(element, () => uiStore.modalStore.closeModal())

</script>

<style scoped>
.modal-content {
    padding: 20px 9px 53px;
}

.close-button {
    margin-left: auto;
}
</style>