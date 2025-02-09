import type { Person } from "@/stores/usePersonStore"
import { reactive, ref } from "vue"

export type ModalVariants = 'add-person' | 'edit-person'

type ModalState = {
    currentModal: ModalVariants | null
    tempData: TempData
}

type TempData = {
    currentModal: 'edit-person'
    content: Person
} | {
    currentModal: 'add-person'
    content: null
} | {
    currentModal: ''
    content: null
}

export function useModalStore() {
    const modalState = reactive<ModalState>({
        currentModal: null,
        tempData: {
            currentModal: '',
            content: null
        }
    })
    const openModal = (id: ModalVariants) => modalState.currentModal = id
    const closeModal = () => modalState.currentModal = null
    const setTempData = (data: TempData) => {
        Object.assign(modalState.tempData, data)
    }
    const clearTempData = () => modalState.tempData.content = null

    return {
        modalState,
        openModal,
        closeModal,
        setTempData,
        clearTempData
    }
}

