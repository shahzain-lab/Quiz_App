import React, { FormEvent, useEffect, useState } from 'react';
// @mui
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Category, fetchCategories } from '../API/API';
import { Form } from '../styles/FormCard.styled';
import '../styles/CustomForm.css';

export interface UserEndpoints {
    questionAmt: number;
    category: number;
    difficulty: string;

}

interface Props {
    callback: (endpoints: UserEndpoints) => void;
}

const FormCard: React.FC<Props> = ({ callback }) => {
    const [difficulty, setDifficulty] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState('');
    const [questionAmt, setQuestionAmt] = useState('5');

    useEffect(() => {
        const getCategories = async () => {
            const categories = await fetchCategories();
            setCategories(categories)
        }
        getCategories()
    }, []);

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(event.target.value);
    };

    const handleQuestionAmt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionAmt(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);

    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const endpoints: UserEndpoints = {
            questionAmt: Number(questionAmt),
            category: Number(category),
            difficulty
        };
        callback(endpoints);
    }



    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                select
                label="Select"
                value={difficulty}
                onChange={handleTypeChange}
                helperText="Please select difficulty level"
                variant="standard"
                color="secondary"
                sx={{ width: '100%', marginBottom: '5%' }}
                required
            >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
            </TextField>

            <TextField
                label="Number of questions"
                value={questionAmt}
                onChange={handleQuestionAmt}
                variant="standard"
                sx={{ width: '100%', marginBottom: '5%' }}
                color="secondary"
                required
            />

            <TextField
                select
                label="Select"
                value={category}
                onChange={handleCategoryChange}
                helperText="Please select your category"
                variant="standard"
                color="secondary"
                sx={{ width: '100%', marginBottom: '7%' }}
                required
            >
                {
                    categories.map(category =>
                        <MenuItem
                            value={category.id}
                            key={category.id}>
                            {category.name}
                        </MenuItem>
                    )
                }
            </TextField>
            <Button variant="contained" type="submit" color="secondary">Contained</Button>
        </Form>
    )
}

export default FormCard;