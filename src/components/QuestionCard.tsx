import React from 'react'
import { Form } from '../styles/FormCard.styled';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';

interface Props {
    questionNr: number;
    nextQuestion: () => void;
    question: string;
    answers: string[];
    totalQuestion: number;
}


const QuestionCard: React.FC<Props> = ({ questionNr, question, answers, totalQuestion, nextQuestion }) => {

    return (

        <Form>
            number of question <span>{questionNr + 1} / {totalQuestion}</span>
            <Divider light />
            {question}
            <Button variant="contained" color="secondary" onClick={nextQuestion}>Next Question</Button>
        </Form>
    )
}

export default QuestionCard
