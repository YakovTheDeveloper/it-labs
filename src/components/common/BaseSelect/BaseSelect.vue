<template>
    <div class="select-container" ref="containerRef">
        <div @click="toggleOpen" @keydown="handleTriggerKeydown" class="trigger" tabindex="0" role="button"
            aria-haspopup="listbox" :aria-expanded="isOpen">
            {{ heading }}
            <img :src="ArrowDropdownIcon" :class="dropdownArrowClasses" />
        </div>
        <ul v-if="isOpen" class="dropdown" role="listbox" @keydown="handleDropdownKeydown">
            <li v-for="({ label, value }) in props.options" :key="value" :class="[
                ' dropdown-option',
                props.modelValue === value && 'dropdown-option-active'
            ]" @keydown.enter="handleSelect(value)" tabindex="0" role="option" :aria-selected="value === modelValue"
                @click.stop="handleSelect(value)">
                {{ label }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import ArrowDropdownIcon from '@/assets/icons/arrow-dropdown-icon.svg'
import type { SelectOption } from '@/components/common/BaseSelect/types';
import { useOutsideClick } from '@/composables/useOutsideClick';
import { computed, ref, watch } from 'vue';

const containerRef = ref<HTMLElement | null>(null);
const isOpen = ref(false)

const props = defineProps<{
    options: SelectOption[]
    modelValue: string;
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>();


const toggleOpen = () => {
    isOpen.value = !isOpen.value
}
const close = () => {
    isOpen.value = false
}

const handleSelect = (value: string) => {
    emit('update:modelValue', value);
    close()
};


const dropdownArrowClasses = computed(() => ([
    'dropdown-arrow',
    isOpen.value && 'dropdown-arrow-active',
]))

const heading = computed(() => props.modelValue ? getOptionLabelByValue(props.modelValue) : 'Выбрать')

watch(isOpen, (value) => console.log(value))

useOutsideClick(containerRef, close)

const getOptionLabelByValue = (value: string) => {
    return props.options.find((option) => option.value === value)?.label || ''
}

const handleTriggerKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleOpen();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        isOpen.value = true;
    }
};

const handleDropdownKeydown = (e: KeyboardEvent) => {
    const currentOption = e.target as HTMLElement;
    const options = containerRef.value?.querySelectorAll('.dropdown-option') as NodeListOf<HTMLElement>;

    if (e.key === 'Escape') {
        isOpen.value = false;
        const trigger = containerRef.value?.querySelector('.trigger') as HTMLElement;
        trigger?.focus();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextOption = currentOption.nextElementSibling as HTMLElement;
        if (nextOption) {
            nextOption.focus();
        } else {
            options[0]?.focus();
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevOption = currentOption.previousElementSibling as HTMLElement;
        if (prevOption) {
            prevOption.focus();
        } else {
            options[options.length - 1]?.focus();
        }
    } else if (e.key === 'Tab') {
        if (!e.shiftKey && currentOption === options[options.length - 1]) {
            isOpen.value = false;
        } else if (e.shiftKey && currentOption === options[0]) {
            isOpen.value = false;
        }
    }
};

</script>

<style scoped>
/* В дизайне размер шрифта в селекте 30px, тут сделал 16px для консистентности с инпутами.
А так по идее надо согласоваться с дизайнером) */

.select-container {
    position: relative;
    font-size: 16px;
}

.trigger {
    box-shadow: var(--box-shadow-input);
    padding: var(--padding-input);
    cursor: pointer;
}

.dropdown-arrow {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.1s;
}

.dropdown-arrow-active {
    transform: rotate(-180deg);
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    background: #fff;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
}

.dropdown-option {
    padding: 17px 19px;
    border-bottom: 1px solid var(--border-color-select-option);
    cursor: pointer;

    &:hover {
        background-color: var(--bg-color-select-option);
    }
}

.dropdown-option-active {
    opacity: 0.75;
    background-color: var(--bg-color-select-option);
}
</style>