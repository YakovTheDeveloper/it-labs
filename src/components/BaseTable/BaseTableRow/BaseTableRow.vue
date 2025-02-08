<template>
    <tr class="row">
        <BaseTableCell v-for="(value, key) in props.content" :key="key" :class="key">
            <component :is="getCellInnerElement(key)" v-bind="getCellInnerElementProps(key, value)">
                {{ value }}
            </component>
        </BaseTableCell>
    </tr>
</template>

<script setup lang="ts">
import BaseTableCell from '@/components/BaseTable/BaseTableCell/BaseTableCell.vue';
import type { TableContent } from '@/components/BaseTable/types';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import type { TypographyProps } from '@/components/common/BaseTypography/types';
import Indicator from '@/components/Indicator.vue';

const props = defineProps<{
    content: TableContent
    isHeading?: boolean
}>()

const getCellInnerElement = (key: string) => {
    if (key === 'isHere') return Indicator
    return BaseTypography
}
const getCellInnerElementProps = (key: string, value: any) => {
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
.row {}

.isHere {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>