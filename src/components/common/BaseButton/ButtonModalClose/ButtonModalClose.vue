<template>
    <BaseButton variant="secondary" @click="closeModal" v-if="isDefault">
        <BaseTypography variant="body2" font-family="secondary" color="inversed">
            Закрыть
        </BaseTypography>
    </BaseButton>
    <button @click="closeModal" class="icon-button" v-else>
        <img :src="CrossIcon" alt="Logo" class="logo" draggable="false" />
    </button>
</template>

<script setup lang="ts">
import CrossIcon from '@/assets/icons/close-circle-icon.svg'
import BaseButton from '@/components/common/BaseButton/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import { uiStore } from '@/stores/useUiStore/useUiStore';

const props = withDefaults(defineProps<{
    variant?: 'icon' | 'default'
}>(), {
    variant: 'default'
})

const { modalStore: { closeModal } } = uiStore

const isDefault = props.variant === 'default'

</script>

<style scoped>
.icon-button {
    display: flex;

    .logo {
        user-select: none;
    }

    &:hover {
        opacity: 0.9;
    }
}
</style>