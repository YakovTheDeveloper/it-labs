<template>
    <component :is="componentType" :class="baseClasses">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    isHeading?: boolean
}>(), {
    isHeading: false
})
const componentType = props.isHeading ? 'th' : 'td'
const baseClasses = computed(() => ([
    'cell',
    props.isHeading && 'cell-heading'
]))
</script>

<style scoped>
.cell {
    padding: 9px 7px 9px 1px;
    text-align: left;
}

.cell-heading {
    border-bottom: 4px solid var(--border-color-table-heading);
}
</style>