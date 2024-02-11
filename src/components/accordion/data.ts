export interface QuestionnaryItem {
    id:number;
    question: string;
    answer: string
}

const data: QuestionnaryItem[] = [
    {
        id: 1,
        question: "What are accordion component?",
        answer: "Accordion component is user interface element used for organizing ..."
    },
    {
        id: 2,
        question: "What is it used for?",
        answer: "It is commonly used in various contexts, including FAQs,..."
    },
    {
        id: 3,
        question: "Accordion as a musical instrument",
        answer: "The accordion is a musical instrument with a keyboard and ..."
    },
    {
        id: 4,
        question: "Can I create accordion component with a different ...",
        answer: "Yes of course, it is very possible to create a accordion component..."
    },
] as QuestionnaryItem[];

export default data;