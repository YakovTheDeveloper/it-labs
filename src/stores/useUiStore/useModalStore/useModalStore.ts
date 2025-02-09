import { reactive } from "vue"

export type ModalVariants = 'add-person' | 'edit-person'

type ModalState = {
    currentModal: ModalVariants | null
}

export function useModalStore() {
    const modalState = reactive<ModalState>({
        currentModal: null
    })
    const openModal = (id: ModalVariants) => modalState.currentModal = id
    const closeModal = () => modalState.currentModal = null

    return {
        modalState,
        openModal,
        closeModal
    }
}

