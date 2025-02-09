<template>
    <form @submit.prevent="handleSubmit" class="form">
        <label class="form-row">
            <BaseTypography variant="label2" color="secondary">
                ФИО
            </BaseTypography>
            <BaseInput placeholder="" v-model="formData.name" />
        </label>
        <label class="form-row">
            <BaseTypography variant="label2" color="secondary">
                Компания
            </BaseTypography>
            <BaseInput placeholder="" v-model="formData.company" />
        </label>
        <label class="form-row">
            <BaseTypography variant="label2" color="secondary">
                Группа
            </BaseTypography>
            <BaseSelect :options="selectOptions" :value="formData.group" :on-select="onGroupSelect" />
        </label>
        <label class="form-row">
            <BaseTypography variant="label2" color="secondary">
                Присутствие
            </BaseTypography>
            <BaseCheckbox v-model="formData.isHere" />
        </label>
        <div class="form-row-actions">
            <BaseButton variant="primary" type="submit">
                <BaseTypography variant="body2" font-family="secondary" color="inversed">
                    Добавить
                </BaseTypography>
            </BaseButton>
            <BaseButton variant="secondary" @click="props.onClose">
                <BaseTypography variant="body2" font-family="secondary" color="inversed">
                    Закрыть
                </BaseTypography>
            </BaseButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton/BaseButton.vue';
import BaseCheckbox from '@/components/common/BaseCheckbox/BaseCheckbox.vue';
import BaseInput from '@/components/common/BaseInput/BaseInput.vue';
import BaseSelect from '@/components/common/BaseSelect/BaseSelect.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import type { Person } from '@/stores/usePersonStore';
import { onUnmounted, reactive } from 'vue';

const selectOptions = [{ label: " Партнер", value: "partner" }, { label: "Прохожий", value: "passerby" }]


const props = defineProps<{
    onSuccess: (data: Person) => void
    onClose: () => void
}>()

const getInitialFormData = (): Person => ({
    id: Math.random(),
    name: '',
    company: '',
    group: '',
    isHere: false
})

const formData = reactive<Person>(getInitialFormData())
const resetForm = () => Object.assign(formData, getInitialFormData());

const handleSubmit = () => {
    props.onSuccess({ ...formData })
    resetForm()
    console.log('submit', formData)
}

const onGroupSelect = (value: string) => {
    formData.group = value
}

const onStatusToggle = (checked: boolean) => {
    formData.isHere = checked
}

onUnmounted(() => resetForm())

</script>

<style scoped>
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

.form-row-actions {
    display: flex;
    gap: 34px;
}
</style>