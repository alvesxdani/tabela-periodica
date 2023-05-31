import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';
import { BoxQuestions } from './style';

function Question() {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]
  return (
    <BoxQuestions>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="option-container">
            <p>Opções</p>
        </div>
        <button>Continuar</button>
    </BoxQuestions>
  )
}

export default Question