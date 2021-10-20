import React, { FormEvent, useEffect, useState } from 'react';
// @mui
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Category, fetchCategories } from '../API/API';
import { Form } from '../styles/FormCard.styled';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    field: {
        width: '100%',
    }
})


function FormCard() {
    const [difficulty, setDifficulty] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState('');

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);

    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(category);
    }

    useEffect(() => {
        const getCategories = async () => {
            const categories = await fetchCategories();
            setCategories(categories)
        }
        getCategories()
    }, []);
    const classes = useStyles()


    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={difficulty}
                onChange={handleTypeChange}
                helperText="Please select difficulty level"
                variant="standard"
                className={classes.field}
                required
            >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
            </TextField>
            <TextField
                id="standard-helperText"
                label="question amount"
                defaultValue="5"
                variant="standard"
                className={classes.field}
                required
            />
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={category}
                onChange={handleCategoryChange}
                helperText="Please select your category"
                variant="standard"
                className={classes.field}
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