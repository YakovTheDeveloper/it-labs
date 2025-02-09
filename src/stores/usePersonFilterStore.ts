

import type { FilterOptions } from '@/components/FilterPanel/types';
import { personStore, type PersonState } from '@/stores/usePersonStore';
import { computed, reactive } from 'vue';

type PresenceFilterState = {
    current: string;
    options: FilterOptions
};

type NameFilterState = {
    current: string;
};


function usePersonFilterStore(personState: PersonState) {

    const isHereFilteringOptions: FilterOptions = [
        { label: 'Отсутствующим', value: 'absent' },
        { label: 'Присутствующим', value: 'present' },
        { label: 'Без фильтра', value: 'unset' },
    ]

    const nameFilterState: NameFilterState = reactive({
        current: '',
    });

    const presenceFilterState: PresenceFilterState = reactive({
        current: 'unset',
        options: isHereFilteringOptions
    });


    const setNameFilter = (value: string) => {
        nameFilterState.current = value
    }

    const setPresenceFilter = (value: string) => {
        presenceFilterState.current = value;
    };

    const getFilteredPerson = computed(() => {
        return personState.content.filter(person => {
            const nameMatch = nameFilterState.current
                ? person.name.toLowerCase().includes(nameFilterState.current.toLowerCase())
                : true;

            let presenceMatch = true;
            if (presenceFilterState.current === 'absent') {
                presenceMatch = !person.isHere;
            } else if (presenceFilterState.current === 'present') {
                presenceMatch = person.isHere;
            }

            return nameMatch && presenceMatch;
        });
    });
    return {
        nameFilterState,
        presenceFilterState,
        setPresenceFilter,
        setNameFilter,
        getFilteredPerson
    }

}

export const personFilterStore = usePersonFilterStore(personStore.personState)

