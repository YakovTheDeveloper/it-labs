<template>
    <label class="form-row">
        <BaseTypography variant="label2" color="secondary">
            {{ props.label }}
        </BaseTypography>
        <slot></slot>
    </label>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
const props = defineProps<{
    label: string
}>()
</script>

<style scoped>
.form-row {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 6fr;
}
</style>