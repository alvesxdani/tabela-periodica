import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { BoxOption } from './style';

const Options = ({option, selectOption, answer}) => {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <BoxOption>
            <p
                className={`${(quizState.answerSelected && option) === answer ? 'correct' : ''}
                            ${(quizState.answerSelected && option) !== answer ? 'wrong' : ''}`}
                onClick={() => selectOption()}>
                    {option}
            </p>
        </BoxOption>
  )
}

export default Options