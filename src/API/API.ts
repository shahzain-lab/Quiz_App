import { UserEndpoints } from "../components/FormCard";

const CATEGORY_URL = 'https://opentdb.com/api_category.php'

export interface Category{
    id: number,
    name: string
}

export const fetchCategories = async (): Promise<Category[]> =>  {
    const {trivia_categories} = await (await fetch(CATEGORY_URL)).json();
    return trivia_categories;
}


export const allQuestions = async (endpoints: UserEndpoints) => {
    const { questionAmt, category, difficulty } = endpoints;
    try{
        const data = await (await fetch(`https://opentdb.com/api.php?amount=${questionAmt}&category=${category}&difficulty=${difficulty}`)).json();
        console.log(data);
    }catch(error) {
        console.log(error);
        
    }
}