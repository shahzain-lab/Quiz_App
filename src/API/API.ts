import { UserEndpoints } from "../components/FormCard";
import { shuffleArray } from "../components/Utils";

const CATEGORY_URL = 'https://opentdb.com/api_category.php'

export interface Category{
    id: number,
    name: string
}

interface Question{
    correct: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]}

export const fetchCategories = async (): Promise<Category[]> =>  {
    const {trivia_categories} = await (await fetch(CATEGORY_URL)).json();
    return trivia_categories;
}


export const allQuestions = async (endpoints: UserEndpoints) => {
    const { questionAmt, category, difficulty } = endpoints;
    try{
        const {results} = await (await fetch(`https://opentdb.com/api.php?amount=${questionAmt}&category=${category}&difficulty=${difficulty}`)).json();
        
        return results.map((question: Question) => (
            {
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        ))
    }catch(error) {
        console.log(error);
        
    }
}