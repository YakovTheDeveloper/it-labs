<template>
    <tr class="row">
        <base-table-cell v-for="(value, key) in props.content" :key="key" :name="key as string">
            <component :is="getCellInnerElement(key as string)" v-bind="getCellInnerElementProps(key as string, value)">
                {{ value }}
            </component>
        </base-table-cell>
    </tr>
</template>

<script setup lang="ts" generic="T extends object">
import BaseTableCell from '@/components/BaseTable/BaseTableCell/BaseTableCell.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import type { TypographyProps } from '@/components/common/BaseTypography/types';
import PersonPresenceStatus from '@/components/PersonPresenceStatus.vue';

const props = defineProps<{
    content: T
    isHeading?: boolean
}>()

const getCellInnerElement = (key: string) => {
    if (key === 'isHere') return PersonPresenceStatus
    return BaseTypography
}
const getCellInnerElementProps = (key: string, value: unknown) => {
    if (key === 'isHere') return {
        isActive: value,
    }
    const typographyProps: TypographyProps = {
        variant: 'table-content'
    }
    return typographyProps
}
</script>

<style scoped>
.row {
    height: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
}
</style>