import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

const Options = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <p>{option}</p>
  )
}

export default Options