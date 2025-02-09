<template>
    <div class="container">
        <layout-header>
            <div class="header-content">
                <base-input class="name-search-input" placeholder="Поиск по имени" v-model="nameFilterState.current" />
                <base-button class="add-button" @click="openModal('add-person')">
                    <base-typography color="inversed" variant="body2">
                        Добавить
                    </base-typography>
                </base-button>
                <visitors-count class="visitors-count" />
            </div>
        </layout-header>
        <base-table :heading="tablePersonHeadings" :content="getFilteredPerson" class="person-table"
            :onRowClick="onTableRowClick" />
        <filter-panel :options="presenceFilterState.options" :onTabSelect="setPresenceFilter"
            :active="presenceFilterState.current" class="filter-panel" />
    </div>
</template>

<script setup lang="ts">
import LayoutHeader from '@/layout/common/LayoutHeader.vue';
import BaseButton from '@/components/common/BaseButton/BaseButton.vue';
import BaseTypography from '@/components/common/BaseTypography/BaseTypography.vue';
import BaseInput from '@/components/common/BaseInput/BaseInput.vue';
import VisitorsCount from '@/components/VisitorsCount.vue';
import BaseTable from '@/components/BaseTable/BaseTable.vue';
import FilterPanel from '@/components/FilterPanel/FilterPanel.vue';
import { personFilterStore } from '@/stores/usePersonFilterStore';
import { uiStore } from '@/stores/useUiStore/useUiStore';
import type { Person } from '@/stores/usePersonStore';

const { presenceFilterState, setNameFilter, getFilteredPerson, setPresenceFilter, nameFilterState } = personFilterStore
const tablePersonHeadings = {
    id: 'Номер',
    name: 'ФИО',
    company: 'Компания',
    group: 'Группа',
    isHere: 'Присутствие'
}
const { modalStore: { openModal, setTempData } } = uiStore

const onTableRowClick = (content: Person) => {
    setTempData({ currentModal: 'edit-person', content: { ...content } })
    openModal('edit-person')
}
</script>

<style scoped>
.container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.header-content {
    display: flex;
    align-items: end;
    flex-grow: 1;
    flex-shrink: 0;
}

.person-table {}

.name-search-input {
    width: 394px;
}

.add-button {
    margin-left: 40px;
}

.visitors-count {
    margin-left: auto;
}

.filter-panel {
    margin-top: auto;
    flex: 0;
}
</style>