<template>
    <tr class="row">
        <BaseTableCell v-for="(value, key) in props.content" :key="key" :class="key">
            <component :is="getCellInnerElement(key as string)" v-bind="getCellInnerElementProps(key as string, value)">
                {{ value }}
            </component>
        </BaseTableCell>
    </tr>
</template>

<script setup lang="ts" generic="T extends object">
import BaseTableCell from '@/components/BaseTable/BaseTableCell/BaseTableCell.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import type { TypographyProps } from '@/components/common/BaseTypography/types';
import Indicator from '@/components/Indicator.vue';

const props = defineProps<{
    content: T
    isHeading?: boolean
}>()

const getCellInnerElement = (key: string) => {
    if (key === 'isHere') return Indicator
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

.isHere {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>