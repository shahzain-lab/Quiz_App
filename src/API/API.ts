// UTILS
import { shuffleArray } from "../components/Utils";
// types
import { Category, Question, UserEndpoints } from "../types/Quiz_Types";

export const fetchCategories = async (): Promise<Category[]> =>  {
    const CATEGORY_URL = 'https://opentdb.com/api_category.php';
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