<template>
    <div class="filter-panel">
        <base-typography color="secondary" variant="label1">
            Фильтровать по
        </base-typography>
        <div class="tabs">
            <base-tab v-for="{ label, value } in props.options" :key="value" @click="onTabSelect(value)"
                :isActive="props.active === value">
                {{ label }}
            </base-tab>
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
})

</script>

<style scoped>
.filter-panel {
    display: flex;
    gap: 50px;
    align-items: center;
    padding-top: 7px;
}

.tabs {
    display: flex;
    gap: 20px;
}
</style>