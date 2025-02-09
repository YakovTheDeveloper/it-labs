import { useModalStore } from "@/stores/useUiStore/useModalStore/useModalStore"


function useUiStore() {
    const modalStore = useModalStore()
    return {
        modalStore
    }
}

export const uiStore = useUiStore()