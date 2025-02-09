<template>
    <BaseModal :is-open="true" class="modal">
        <form action="" class="form">
            <label class="form-row">
                <BaseTypography variant="label2" color="secondary">
                    ФИО
                </BaseTypography>
                <BaseInput placeholder="" />
            </label>
            <label class="form-row">
                <BaseTypography variant="label2" color="secondary">
                    Компания
                </BaseTypography>
                <BaseInput placeholder="" />
            </label>
            <label class="form-row">
                <BaseTypography variant="label2" color="secondary">
                    Группа
                </BaseTypography>
            </label>
            <label class="form-row">
                <BaseTypography variant="label2" color="secondary">
                    Присутствие
                </BaseTypography>
                <BaseCheckbox />
            </label>
        </form>
    </BaseModal>
</template>

<script setup lang="ts">
import BaseCheckbox from '@/components/common/BaseCheckbox/BaseCheckbox.vue';
import BaseInput from '@/components/common/BaseInput/BaseInput.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import BaseModal from '@/components/Modal/BaseModal.vue';


</script>

<style scoped>
.modal {
    max-width: 1400px;
}

.form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 771px;
    gap: 48px;
}

.form-row {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 6fr;
}
</style>