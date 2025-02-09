<template>
  <dialog ref="dialogElement" class="modal" :open="isOpen">
    <div class="modal-content">
      <button @click="closeModalHandler" class="close-button">
        <img :src="CrossIcon" alt="Logo" class="logo" draggable="false" />
      </button>
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import CrossIcon from '@/assets/icons/close-circle-icon.svg'
import type { ModalVariants } from '@/stores/useUiStore/useModalStore/useModalStore';
import { useOutsideClick } from '@/composables/useOutsideClick';

const props = defineProps<{
  id: ModalVariants
  currentModalId: ModalVariants | null
  closeModal: () => void
}>();

const emit = defineEmits(['close']);

const dialogElement = ref<HTMLDialogElement | null>(null);

const isOpen = computed(() => props.id === props.currentModalId)

watch(
  () => isOpen,
  (isOpen) => {
    if (isOpen) {
      dialogElement.value?.showModal();
    } else {
      dialogElement.value?.close();
    }
  },
  { immediate: true },
);


const closeModalHandler = () => {
  props.closeModal()
  emit('close');
};


</script>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;

  border: none;
  border-radius: var(--border-radius-modal-content);
  padding: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  z-index: 1000;
}

.modal::backdrop {
  background-color: rgba(0, 0, 0, 1);
}

.modal-content {
  padding: 20px 20px 53px;
}

.close-button {
  display: flex;
  margin-left: auto;

  &:hover {
    opacity: 0.9;
  }
}

.logo {
  user-select: none;
}
</style>