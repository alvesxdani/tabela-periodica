import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import { BoxOption } from './style';

const Options = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <BoxOption>{option}</BoxOption>
  )
}

export default Options