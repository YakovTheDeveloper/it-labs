<template>
    <div class="filter-panel">
        <BaseTypography color="secondary" variant="label1">
            Фильтровать по
        </BaseTypography>
        <div class="tabs">
            <BaseTab v-for="{ label, value } in props.options" :key="value" @click="onTabSelect(value)"
                :isActive="props.active === value">
                {{ label }}
            </BaseTab>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTab from '@/components/common/BaseTab/BaseTab.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import type { FilterOptions } from '@/components/FilterPanel/types';

const props = withDefaults(defineProps<{
    options: FilterOptions
    active: string
    onTabSelect: (value: string) => void
}>(), {
    active: '',
    options: []
})

</script>

<style scoped>
.filter-panel {
    display: flex;
    gap: 50px;
    align-items: center;
}

.tabs {
    display: flex;
    gap: 20px;
}
</style>