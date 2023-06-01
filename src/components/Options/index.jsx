import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { BoxOption } from './style';

const Options = ({option, selectOption, answer}) => {

    const [quizState, dispatch] = useContext(QuizContext);
    
  return (
    <BoxOption onClick={() => selectOption()}>{option}</BoxOption>
  )
}

export default Options