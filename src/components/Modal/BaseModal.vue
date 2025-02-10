<template>
  <dialog ref="dialogElement" class="modal" @keydown="handleKeydown">
    <base-modal-content class="modal-content" v-if="isOpen">
      <slot></slot>
    </base-modal-content>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { ModalVariants } from '@/stores/useUiStore/useModalStore/useModalStore';
import BaseModalContent from '@/components/Modal/BaseModalContent.vue';

const props = defineProps<{
  id: ModalVariants
  currentModalId: ModalVariants | null
  closeModal: () => void
}>();

const dialogElement = ref<HTMLDialogElement | null>(null);

const isOpen = computed(() => props.id === props.currentModalId)


watch(
  () => isOpen.value,
  (isOpen) => {
    if (isOpen) {
      dialogElement.value?.showModal();
    } else {
      dialogElement.value?.close();
    }
  },
  { immediate: true },
);

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
  }
  if (event.key === 'Escape') {
    props.closeModal()
  }
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
  background-color: var(--bg-color-backdrop);
}
</style>