import { onMounted, onUnmounted, type Ref } from 'vue';

export function useOutsideClick(elementRef: Ref<HTMLElement | null>, callback: () => void) {
    const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
            callback();
        }
    };

    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });
}