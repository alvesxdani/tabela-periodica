import React, { useContext } from 'react'
import { BoxGameOver } from './style'
import { QuizContext } from '../../context/quiz'

function GameOver() {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <BoxGameOver>
        <h2>Fim de jogo!</h2>
        <p>Pontuação: <strong>{quizState.score}</strong></p>
        <p>Você acertou <strong>{quizState.score}</strong> de <strong>{quizState.questions.length}</strong> perguntas!</p>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </BoxGameOver>
  )
}

export default GameOver