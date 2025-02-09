<template>
    <div class="container">
        <layout-header>
            <div class="header-content">
                <base-input class="name-search-input" placeholder="Поиск по имени" />
                <base-button class="add-button">
                    <base-typography color="inversed">
                        Добавить
                    </base-typography>
                </base-button>
                <visitors-count class="visitors-count" />
            </div>
        </layout-header>
        <base-table :heading="tablePersonHeadings" :content="getFilteredPerson" class="person-table" />
        <filter-panel :options="filterState.options" :onTabSelect="setActiveFilter" :active="filterState.currentFilter"
            class="filter-panel" />
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

const { filterState, getFilteredPerson, setActiveFilter } = personFilterStore
const tablePersonHeadings = {
    num: 'Номер',
    name: 'ФИО',
    company: 'Компания',
    group: 'Группа',
    isHere: 'Присутствие'
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