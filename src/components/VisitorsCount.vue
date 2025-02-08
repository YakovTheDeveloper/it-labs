<template>
    <div class="container">
        <base-typography variant="label1" color="secondary">
            Посетители
        </base-typography>
        <span class="visitor-count">
            <base-typography variant="label1" color="success">
                280
            </base-typography>
            <base-typography variant="label1" color="secondary" class="visitor-count-separator">
                /
            </base-typography>
            <base-typography variant="label1" color="danger">
                35
            </base-typography>
        </span>
    </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
}


.visitor-count {
    display: flex;
}

.visitor-count-separator {
    margin: 0 8px 0 12px;
}
</style>