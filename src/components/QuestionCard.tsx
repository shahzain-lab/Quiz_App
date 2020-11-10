import React from 'react'
import { AnswerObj } from '../App'
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObj | undefined;
    questionNr: number;
    totalQuestion: number; 
}

export const QuestionCard: React.FC<Props> = ({question,answers,callback,userAnswer,questionNr,totalQuestion}) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNr} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} />

            {answers.map(answer => (
                <ButtonWrapper 
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true: false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}}/>
                    </button>
                    </ButtonWrapper>
            )
            )}
        </Wrapper>
    )
}
