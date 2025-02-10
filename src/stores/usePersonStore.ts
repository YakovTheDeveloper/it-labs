import { computed, reactive, watch } from 'vue';

export type Person = {
    id: number;
    name: string;
    company: string;
    group: string;
    isHere: boolean;
};

export type PersonState = {
    content: Person[];
    visitorsCount: {
        here: number;
        notHere: number;
    }
};

const INIT_STATE_CONTENT = [
    {
        id: 1,
        name: 'Зубенко Михаил Петрович',
        company: 'ООО “АСОЛЬ”',
        group: 'Партнер',
        isHere: true,
    },
    {
        id: 2,
        name: 'Зубенко Михаил Петрович',
        company: 'ООО “АСОЛЬ”',
        group: 'Прохожий',
        isHere: false,
    },
]

function usePersonStore() {
    const loadStateFromLocalStorage = (): Person[] | null => {
        const savedState = localStorage.getItem('personState');
        if (savedState) {
            try {
                const parsedState = JSON.parse(savedState);
                return parsedState.content || [];
            } catch (error) {
                console.error('Failed to parse localStorage data:', error);
            }
        }
        return null
    };

    const saveStateToLocalStorage = () => {
        try {
            localStorage.setItem('personState', JSON.stringify({ content: personState.content }));
        } catch (error) {
            console.error('Failed to save state to localStorage:', error);
        }
    };

    const personState: PersonState = reactive({
        content: loadStateFromLocalStorage() || INIT_STATE_CONTENT,
        visitorsCount: computed(() => {
            return calculateVisitorsCount(personState.content)
        })
    });

    const addPerson = (person: Person) => {
        person.id = getNextId()
        personState.content.push(person);
    };

    const editPerson = (person: Person) => {
        const index = personState.content.findIndex(({ id }) => id === person.id);
        if (index === -1) return;
        personState.content[index] = { ...person };
    };

    const getNextId = () => {
        if (personState.content.length === 0) return 1;
        const maxId = Math.max(...personState.content.map(person => person.id));
        return maxId + 1;
    };

    const calculateVisitorsCount = (content: Person[]) => {
        const count = { here: 0, notHere: 0 };
        content.forEach(person => {
            if (person.isHere) {
                count.here++;
            } else {
                count.notHere++;
            }
        });
        return count;
    };

    watch(
        () => personState.content,
        () => {
            saveStateToLocalStorage();
        },
        { deep: true }
    );

    return {
        personState,
        addPerson,
        editPerson,
        getNextId
    };
}

export const personStore = usePersonStore()
