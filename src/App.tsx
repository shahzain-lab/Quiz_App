import React, { useState } from 'react';
// API
import { allQuestions } from './API/API';
// components
import FormCard from './components/FormCard';
import QuestionCard from './components/QuestionCard';
import Progress from './components/Progress';
import ResultsCard from './components/ResultsCard';
// styling
import { GlobalStyle, Wrapper, Heading } from './styles/App.styled';
// types
import { QuestionState, UserAnswer, UserEndpoints } from './types/Quiz_Types';

const App = () => {
    const [questions, setQuestions] = useState<QuestionState[]>([]); //-all questions[]
    const [userFields, setUserFields] = useState<UserEndpoints>(Object); //-user seleted fields(difficulty, category, totalQuestion)
    const [userAnswer, setUserAnswer] = useState<UserAnswer>(); //-user answer object
    const [questionNumber, setQuestionNumber] = useState(0); //-current question number
    const [loading, setLoading] = useState(false); //-loading spinner
    const [result, setResult] = useState(false); //-end results (game over)
    const [score, setScore] = useState(0); //-total score

    //-start fetching questions based on user fields
    const startTrivia = async (endpoints: UserEndpoints) => {
        setUserFields(endpoints);
        setResult(false);
        setLoading(true);
        // returning data
        const getQuestions = await allQuestions(endpoints);
        setQuestions(getQuestions);
        setScore(0);
        setQuestionNumber(0)
        setLoading(false);
        setUserAnswer({})
    }

    //-next question
    const handleNextQuestion = () => {
        if (questionNumber !== userFields?.questionAmt - 1) {
            setQuestionNumber(prev => prev + 1);
            setUserAnswer({})
        } else {
            setResult(true);
        }
    }

    //-checking current answer
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

    //-starting new Quiz (game over === true)
    const newQuiz = () => {
        setQuestions([])
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
                        totalQuestion={userFields?.questionAmt}
                        callback={checkAnswer}
                        userAnswer={userAnswer ? userAnswer : undefined}
                    />
                ) :
                    <ResultsCard
                        score={score}
                        results={userFields}
                        callback={newQuiz}
                    />
                : loading ? (
                    <Progress />
                ) :
                    <FormCard callback={startTrivia} />
            }
        </Wrapper>
    )
}

export default App;