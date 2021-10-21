import React, { FormEvent } from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
// styled-components
import { StyledButton } from '../styles/Cards.styled';
import { Form } from '../styles/FormCard.styled';
import { UserAnswer } from '../App';

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
            <Button variant="contained" color="secondary" onClick={nextQuestion}>Next Question</Button>
        </Form>
    )
}

export default QuestionCard
