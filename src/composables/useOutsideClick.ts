import { onMounted, onUnmounted, type Ref } from 'vue';

export function useOutsideClick(elementRef: Ref<HTMLElement | null>, callback: () => void) {
    const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
            console.log(elementRef, 'close');
            callback();
        }
    };

    onMounted(() => {
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 0);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });
}