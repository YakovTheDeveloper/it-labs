<template>
    <table class="table">
        <thead>
            <BaseTableCell v-for="(heading, key) in props.heading" :key="key" is-heading>
                <base-typography variant="table-heading" color="secondary">
                    {{ heading }}
                </base-typography>
            </BaseTableCell>
        </thead>
        <tbody>
            <BaseTableRow v-for="(data, idx) in props.content" :content="data" :key="idx" />
        </tbody>
    </table>
</template>

<script setup lang="ts">
import BaseTableCell from '@/components/BaseTable/BaseTableCell/BaseTableCell.vue';
import BaseTableRow from '@/components/BaseTable/BaseTableRow/BaseTableRow.vue';
import type { TableContent } from '@/components/BaseTable/types';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';

const props = defineProps<{
    content: TableContent[]
    heading: TableContent
}>()
</script>

<style scoped>
.table {
    width: 100%;
    border-spacing: 0 22px;
    border-collapse: separate;
}
</style>