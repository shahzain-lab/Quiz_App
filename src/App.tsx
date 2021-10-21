import React, { useState } from 'react';
// API
import { allQuestions, QuestionState } from './API/API';
// components
import FormCard, { UserEndpoints } from './components/FormCard';
import QuestionCard from './components/QuestionCard';
import Progress from './components/Progress';
// styling
import { GlobalStyle, Wrapper, Heading } from './styles/App.styled';

export interface UserAnswer {
    answer?: string;
    correct?: boolean;
    correctAns?: string;
}

const App = () => {
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [totalQuestion, setTotalQuestion] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState<UserAnswer>();
    const [questionNumber, setQuestionNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

    const startTrivia = async (endpoints: UserEndpoints) => {
        const { questionAmt } = endpoints;
        setTotalQuestion(questionAmt);
        setResult(false);
        setLoading(true);
        const getQuestions = await allQuestions(endpoints);
        setQuestions(getQuestions);
        setScore(0);
        setQuestionNumber(0)
        setLoading(false);
        setUserAnswer({})
    }
    const handleNextQuestion = () => {
        if (questionNumber !== totalQuestion - 1) {
            setQuestionNumber(prev => prev + 1);
            setUserAnswer({})
        } else {
            setResult(true);
        }
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const answer = (e.target as HTMLButtonElement).value;
        const correct = questions[questionNumber].correct_answer === answer;
        if (correct) setScore(prev => prev + 1);
        const userAns = {
            answer,
            correct,
            correctAns: questions[questionNumber].correct_answer
        }
        setUserAnswer(userAns)
    }

    return (
        <Wrapper>
            <GlobalStyle />
            <Heading>Quiz App</Heading>
            {questions.length ?
                !result ? (
                    <QuestionCard
                        questionNr={questionNumber}
                        question={questions[questionNumber].question}
                        answers={questions[questionNumber].answers}
                        nextQuestion={handleNextQuestion}
                        totalQuestion={totalQuestion}
                        callback={checkAnswer}
                        userAnswer={userAnswer ? userAnswer : undefined}
                    />
                ) : <h1>Results: {score}</h1> : loading ? (
                    <Progress />
                ) :
                    <FormCard callback={startTrivia} />
            }
        </Wrapper>
    )
}

export default App;