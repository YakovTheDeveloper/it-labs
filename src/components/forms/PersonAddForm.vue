<template>
    <base-form @submit.prevent="handleSubmit">
        <form-row label="ФИО">
            <base-input placeholder="" v-model="formData.name" />
        </form-row>
        <form-row label="Компания">
            <base-input placeholder="" v-model="formData.company" />
        </form-row>
        <form-row label="Группа">
            <base-select :options="selectOptionsGroup" v-model="formData.group" />
        </form-row>
        <form-row label="Присутствие">
            <base-checkbox v-model="formData.isHere" />
        </form-row>
        <form-row-actions>
            <base-button variant="primary" type="submit">
                <base-typography variant="body2" font-family="secondary" color="inversed">
                    Добавить
                </base-typography>
            </base-button>
            <button-modal-close />
        </form-row-actions>
    </base-form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton/BaseButton.vue';
import ButtonModalClose from '@/components/common/BaseButton/ButtonModalClose/ButtonModalClose.vue';
import BaseCheckbox from '@/components/common/BaseCheckbox/BaseCheckbox.vue';
import BaseInput from '@/components/common/BaseInput/BaseInput.vue';
import BaseSelect from '@/components/common/BaseSelect/BaseSelect.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import BaseForm from '@/components/forms/common/BaseForm.vue';
import { selectOptionsGroup } from '@/components/forms/common/data';
import FormRow from '@/components/forms/common/FormRow.vue';
import FormRowActions from '@/components/forms/common/FormRowActions.vue';
import type { Person } from '@/stores/usePersonStore';
import { reactive } from 'vue';


const props = defineProps<{
    onSuccess: (data: Person) => void
    initFormData?: Person
}>()

const getInitialFormData = (): Person => {
    if (props.initFormData) return props.initFormData
    return {
        id: -1,
        name: '',
        company: '',
        group: '',
        isHere: false
    }
}

const formData = reactive<Person>(getInitialFormData())
const resetForm = () => Object.assign(formData, getInitialFormData());

const handleSubmit = () => {
    props.onSuccess({ ...formData })
    resetForm()
}
</script>

<style scoped></style>