<template>
    <component :is="componentType" :class="baseClasses">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    isHeading?: boolean
    name: string
}>(), {
    isHeading: false
})
const componentType = props.isHeading ? 'th' : 'td'
const baseClasses = computed(() => ([
    props.name,
    'cell',
    props.isHeading && 'cell-heading'
]))
</script>

<style scoped>
.cell {
    padding: 0 7px 0 1px;
    text-align: left;
    word-break: break-word;
}

.cell-heading {
    border-bottom: 4px solid var(--border-color-table-heading);
}

.isHere {
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 15%;
}

.id {
    width: 10%;
}

.name {
    width: 33%;
}
</style>