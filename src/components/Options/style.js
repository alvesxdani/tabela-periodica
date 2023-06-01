import { styled } from "styled-components";

export const BoxOption = styled.div`

    p {
        padding: 1rem;
        background: rgba(0,0,0,0.1);
        border-radius: 0.4rem;
        cursor: pointer;
        transition: all .80s;
    }

    p:hover {
        opacity: .7;
    }

    .correct {
        background-color: #33e860;
        font-weight: bolder;
    }

    .wrong {
        background-color: #ff0000;
    }
`