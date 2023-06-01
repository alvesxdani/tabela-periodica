import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';
import { BoxQuestions } from './style';
import Options from '../Options';

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option},
    })
  }

  return (
    <BoxQuestions>
      <div className='box_question'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="option-container">
          {currentQuestion.options.map((option) =>
            (<Options 
              option={option} 
              key={option} 
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)} />)
            )
          }
        </div>
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
      </div>
    </BoxQuestions>
  )
}

export default Question