import { computed, reactive } from 'vue';

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

function usePersonStore() {

    const personState: PersonState = reactive({
        content: [
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
        ],
        visitorsCount: computed(() => {
            const count = {
                here: 0,
                notHere: 0,
            };

            personState.content.forEach(person => {
                if (person.isHere) {
                    count.here++;
                } else {
                    count.notHere++;
                }
            });

            return count;
        })
    });

    const addPerson = (person: Person) => {
        personState.content.push(person);
    };

    const editPerson = (person: Person) => {
        const index = personState.content.findIndex(({ id }) => id === person.id);
        if (index === -1) return;
        personState.content[index] = { ...person };
    };

    return {
        personState,
        addPerson,
        editPerson
    };
}

export const personStore = usePersonStore()
