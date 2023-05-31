import React, { useContext } from 'react'
import WlcScreen from './style';
import { QuizContext } from '../../context/quiz';

function Welcome() {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <WlcScreen>
        <h1>Quiz: Tabela Periódica</h1>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </WlcScreen>
  )
}

export default Welcome;