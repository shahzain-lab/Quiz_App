export interface UserEndpoints {
    questionAmt: number;
    category: number;
    difficulty: string;
}

export interface UserAnswer {
    answer?: string;
    correct?: boolean;
    correctAns?: string;
}

//-for json categories
export interface Category{
    id: number,
    name: string
}

// recieving api quiz
export interface Question{
    correct: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// modify Question
export type QuestionState = Question & {answers: string[]}