
const CATEGORY_URL = 'https://opentdb.com/api_category.php'

export interface Category{
    id: number,
    name: string
}

export const fetchCategories = async (): Promise<Category[]> =>  {
    const {trivia_categories} = await (await fetch(CATEGORY_URL)).json();
    return trivia_categories;
}


export const allQuestions = async () => {
    
}