import { styled } from "styled-components";

export const BoxQuestions = styled.div`
margin-top: 2rem;
width: 100%;
height: 70vh;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

    .box_question {
        background-color: #812225;
        color: #fff;
        padding: 2rem;
        margin: 2rem;
        border-radius: 1rem;
    }

    h2 {
        font: bolder 2rem 'Montserrat', sans-serif;
        margin-bottom: 1rem;
    }

    p{
        margin: 1rem;
        font-size: 0.7rem;
        font: 0.9rem 'Lato', sans-serif;
    }

    button {
        font-weight: bold;
        font: 1.2rem 'Lato', sans-serif;
        cursor: pointer;
        padding: .8rem 1.5rem;
        background: #c42e32ff;
        color: #fff;
        border-radius: 3rem;
        border: none;
        transition: all .80s;

        &:hover {
            background: #6c9dbaff;
        }
    }
`