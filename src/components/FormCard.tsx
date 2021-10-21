import React, { FormEvent, useEffect, useState } from 'react';
// @mui
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
// components
import { fetchCategories } from '../API/API';
import { Form, Wrapper } from '../styles/Card.styled';
// CSS
import '../styles/CustomForm.css';
//types
import { Category, UserEndpoints } from '../types/Quiz_Types';



interface Props {
    callback: (endpoints: UserEndpoints) => void;
}

const FormCard: React.FC<Props> = ({ callback }) => {
    const [difficulty, setDifficulty] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState('');
    const [questionAmt, setQuestionAmt] = useState('5');


    //-getting categories from API
    useEffect(() => {
        const getCategories = async () => {
            const categories = await fetchCategories();
            setCategories(categories)
        }
        getCategories()
    }, []);

    //-difficulty level
    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(event.target.value);
    };

    //-total question
    const handleQuestionAmt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionAmt(event.target.value);
    };

    //-select category
    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);

    };

    //-submit user fields to callback
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const endpoints = {
            questionAmt: Number(questionAmt),
            category: Number(category),
            difficulty
        };
        callback(endpoints);
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Wrapper>
                <TextField
                    select
                    label="Select"
                    value={difficulty}
                    onChange={handleTypeChange}
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
                />

                <TextField
                    select
                    label="Select"
                    value={category}
                    onChange={handleCategoryChange}
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
            </Wrapper>
            <Button variant="contained" type="submit" color="secondary">Start</Button>
        </Form>
    )
}

export default FormCard;