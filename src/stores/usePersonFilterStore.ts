

import type { FilterOptions } from '@/components/FilterPanel/types';
import { personStore, type PersonState } from '@/stores/usePersonStore';
import { computed, reactive } from 'vue';

type FilterState = {
    currentFilter: string;
    options: FilterOptions
};

function usePersonFilterStore(personState: PersonState) {

    const filteringOptions: FilterOptions = [
        { label: 'Отсутствующим', value: 'absent' },
        { label: 'Присутствующим', value: 'present' },
        { label: 'Без фильтра', value: 'unset' },
    ]

    const filterState: FilterState = reactive({
        currentFilter: 'unset',
        options: filteringOptions
    });

    const setActiveFilter = (value: string) => {
        filterState.currentFilter = value;
    };

    const getFilteredPerson = computed(() => {
        return personState.content.filter(({ isHere }) => {
            if (filterState.currentFilter === 'absent') return !isHere
            if (filterState.currentFilter === 'present') return isHere
            return true
        })
    })

    return {
        filterState,
        setActiveFilter,
        getFilteredPerson
    }

}

export const personFilterStore = usePersonFilterStore(personStore.personState)

