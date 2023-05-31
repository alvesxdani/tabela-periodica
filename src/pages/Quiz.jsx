import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import Question from "../components/Question/Question";
import { QuizContext } from "../context/quiz";
import { useContext, useEffect } from "react";

const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        
    }, [])

    return (
        <>
            <Nav />

            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
        </>
    )
}

export default Quiz;