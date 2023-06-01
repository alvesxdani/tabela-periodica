import React, { useContext, useEffect, useState } from 'react'
import { BoxGameOver } from './style'
import { QuizContext } from '../../context/quiz'
import Confetti from 'react-confetti';

function GameOver() {

    const [quizState, dispatch] = useContext(QuizContext);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      })
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
    
        window.addEventListener('resize', handleResize);
      }, [])

  return (
    <BoxGameOver>

    <Confetti
      width={windowSize.width}
      height={windowSize.height}
    />
        <h2>Fim de jogo!</h2>
        <p>Você acertou <strong>{quizState.score}</strong> de <strong>{quizState.questions.length}</strong> perguntas!</p>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </BoxGameOver>
  )
}

export default GameOver