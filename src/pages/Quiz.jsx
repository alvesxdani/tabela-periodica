import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import Question from "../components/Question/Question";
import { QuizContext } from "../context/quiz";
import { useContext, useEffect } from "react";
import GameOver from "../components/GameOver";

const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        dispatch({type: "REORDER_QUESTIONS"})
    }, [])

    return (
        <>
            <Nav />

            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}
        </>
    )
}

export default Quiz;