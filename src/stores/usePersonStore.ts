import { reactive } from 'vue';

type Person = {
    num: number;
    name: string;
    company: string;
    group: string;
    isHere: boolean;
};

export type PersonState = {
    content: Person[];
};

export function usePersonStore() {

    const personState: PersonState = reactive({
        content: [
            {
                num: 1,
                name: 'Зубенко Михаил Петрович',
                company: 'ООО “АСОЛЬ”',
                group: 'Партнер',
                isHere: true,
            },
            {
                num: 2,
                name: 'Зубенко Михаил Петрович',
                company: 'ООО “АСОЛЬ”',
                group: 'Прохожий',
                isHere: false,
            },
        ],
    });


    const addPerson = (person: Person) => {
        personState.content.push(person);
    };

    return {
        personState,
        addPerson,
    };
}

export const personStore = usePersonStore()
