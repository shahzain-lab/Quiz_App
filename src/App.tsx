
import {QuestionCard} from './components/QuestionCard';
import {fetchQuizQuestion} from './components/API' ;
import {QuestionState ,Difficulty} from './components/API';
import { useState } from 'react';
import {GlobalStyle,Wrapper} from './components/App.Styles'

export type AnswerObj = { 
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const Total_Question =10;

function App() {
  const [loading , setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number ,setNumber] = useState(0);
  const [userAnswer,setUserAnswer] = useState<AnswerObj[]>([]);
  const [score , setScore] = useState(0); 
  const [gameOver , setGameOver] = useState(true)


  const startApi = async () => {
     setLoading(true);
     setGameOver(false);

     const newQuestion = await fetchQuizQuestion(
       Total_Question,
       Difficulty.EASY
     )
     setQuestion(newQuestion);
     setScore(0);
     setUserAnswer([]);
     setNumber(0);
     setLoading(false);
  }
   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
     if(!gameOver){
       const answer = e.currentTarget.value

       const correct = question[number].correct_answer === answer;

       if(correct) setScore(prev => prev + 1)

       const answerObj = {
         question: question[number].question,
         answer,
         correct,
         correctAnswer: question[number].correct_answer,
       }
       setUserAnswer((prev) => [...prev, answerObj]);
     }

   }
   const nextQuestion = () => {
      const nextQuestion = number + 1;
      if(nextQuestion === Total_Question) {
        setGameOver(true);
      }else {
        setNumber(nextQuestion);
      }
   }
  return (
    <div >
      <GlobalStyle/>
      <Wrapper>
      <h1>React Quiz</h1>
      {gameOver || userAnswer.length === Total_Question ? ( 
      <button className="start" onClick={startApi}>
        start
      </button>
      ):null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading Question....</p>}
      {!loading && !gameOver && (
      <QuestionCard 
      questionNr={number + 1}
      totalQuestion={Total_Question}
      question={question[number].question}
      answers = {question[number].answers}
      userAnswer={userAnswer ? userAnswer[number]: undefined}
      callback={checkAnswer}
      /> 
      )}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== Total_Question - 1 ? (
      <button className="next" onClick={nextQuestion}>Next</button>
      ): null}
      </Wrapper>
    </div>
  );
}

export default App;
