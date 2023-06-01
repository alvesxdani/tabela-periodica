import { styled } from "styled-components";

export const BoxGameOver = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 80vh;

    h2 {
        font: bolder 3rem 'Montserrat',sans-serif;
    }

    p {
        font:1rem 'Lato', sans-serif;
        margin: 1rem;
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
        margin: 1rem;
        transition: all .80s;

        &:hover {
            background: #005387ff;
        }
    }


`