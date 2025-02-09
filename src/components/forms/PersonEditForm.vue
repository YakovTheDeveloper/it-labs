<template>
    <BaseForm @submit.prevent="handleSubmit" v-if="formData">
        <FormRow label="ФИО">
            <BaseInput placeholder="" v-model="formData.name" />
        </FormRow>
        <FormRow label="Компания">
            <BaseInput placeholder="" v-model="formData.company" />
        </FormRow>
        <FormRow label="Группа">
            <BaseSelect :options="selectOptionsGroup" v-model="formData.group" />
        </FormRow>
        <FormRow label="Присутствие">
            <BaseCheckbox v-model="formData.isHere" />
        </FormRow>
        <FormRowActions>
            <BaseButton variant="primary" type="submit">
                <BaseTypography variant="body2" font-family="secondary" color="inversed">
                    Подтвердить изменения
                </BaseTypography>
            </BaseButton>
            <ButtonModalClose />
        </FormRowActions>
    </BaseForm>
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
import { computed, onUnmounted, reactive, watch } from 'vue';


const props = defineProps<{
    onSuccess: (data: Person) => void
    initFormData?: Person | null
}>()

const getInitialFormData = computed(() => {
    console.log(props.initFormData)
    if (props.initFormData) return props.initFormData
    return {
        id: Math.random(),
        name: '',
        company: '',
        group: '',
        isHere: false
    }
})
const formData = reactive<Person>(getInitialFormData.value)

// const updateForm = (newState: Person) => Object.assign(formData, newState);

watch(() => formData, (initFormData) => {
    console.log('watch', initFormData)

})


const handleSubmit = () => {
    props.onSuccess({ ...formData })
}
</script>

<style scoped></style>