<template>
    <table class="table">
        <thead class="table-head">
            <tr>
                <base-table-cell v-for="(columnName, key) in props.columns" :key="key" is-heading class="cell-heading"
                    :name="key">
                    <base-typography variant="table-heading" color="secondary">
                        {{ columnName }}
                    </base-typography>
                </base-table-cell>
            </tr>
        </thead>
        <tbody class="table-body">
            <base-table-row v-for="(data, idx) in props.content" :content="data" :key="idx" @click="onRowClick(data)" />
        </tbody>
    </table>
</template>

<script setup lang="ts" generic="T extends object">
import BaseTableCell from '@/components/BaseTable/BaseTableCell/BaseTableCell.vue';
import BaseTableRow from '@/components/BaseTable/BaseTableRow/BaseTableRow.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';

const props = defineProps<{
    content: T[]
    columns: Record<string, string>
    onRowClick: (data: T) => void
}>()
</script>

<style scoped>
.table {
    width: 100%;
    height: 100%;
    border-spacing: 0 22px;
    border-collapse: separate;
    display: flex;
    flex-direction: column;
}

.table-head,
.table-body {
    display: block;
}

.table-head {
    position: sticky;
    top: 5px;
    background-color: white;
    z-index: 1;
}

.table-body {
    overflow-y: auto;
    flex-grow: 1;
}

.table-head tr,
.table-body tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.cell-heading {
    padding-bottom: 5px;

    &:last-child {
        text-align: right;
    }

}
</style>