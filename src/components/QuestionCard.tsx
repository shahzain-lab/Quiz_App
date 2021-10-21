import React, { FormEvent } from 'react'
// @mui
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
// styled-components
import { StyledButton, Wrapper } from '../styles/QuestionCards.styled';
import { Form } from '../styles/Card.styled';
// types
import { UserAnswer } from '../types/Quiz_Types';

interface Props {
    questionNr: number;
    nextQuestion: () => void;
    question: string;
    answers: string[];
    totalQuestion: number;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: UserAnswer;
}

const QuestionCard: React.FC<Props> = ({ questionNr,
    question,
    answers,
    totalQuestion,
    nextQuestion,
    callback,
    userAnswer
}) => {

    //-prevent form submition
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Typography variant="body1" color="darkgray" gutterBottom>
                number of question:  {questionNr + 1}/{totalQuestion}
            </Typography>
            <Divider light />
            <Typography variant="body2" color="white" gutterBottom>
                {question}
            </Typography>
            <Wrapper>
                {answers.map(answer => (
                    <StyledButton
                        key={answer}
                        value={answer}
                        correct={userAnswer?.correctAns === answer}
                        userClicked={userAnswer?.answer === answer}
                        onClick={callback}
                        disabled={userAnswer?.answer ? true : false}
                    >{answer}
                    </StyledButton>
                ))}
            </Wrapper>
            <Button variant="contained" color="secondary" onClick={nextQuestion}>Next Question</Button>
        </Form>
    )
}

export default QuestionCard
