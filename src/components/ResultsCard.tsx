import React from 'react';
// @mui
import { Button, Divider, Typography } from '@mui/material';
// styled-components
import { Form } from '../styles/Card.styled';
import { Wrapper, Ul } from '../styles/Results.styled';
// types
import { UserEndpoints } from '../types/Quiz_Types';

interface Props {
    score: number;
    results: UserEndpoints;
    callback: () => void
}

const ResultsCard: React.FC<Props> = ({
    score,
    results:
    { difficulty, questionAmt },
    callback
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        callback();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Wrapper>
                <Typography variant="h6" color="darkgray">Your Results</Typography>
                <Divider />
                <Ul>
                    <li>Score: <span>{score}</span></li>
                    <li>Difficulty level: <span>{difficulty}</span></li>
                    <li>Total Question: <span>{questionAmt}</span></li>
                </Ul>
            </Wrapper>
            <Button variant="contained" type="submit" color="secondary">play again</Button>
        </Form>
    )
}

export default ResultsCard
