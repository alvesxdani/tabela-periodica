import { styled } from "styled-components";

const WlcScreen = styled.div`
/* border: 1px solid #eee; */
text-align: center;
min-height: 80vh;
height: 100%;
margin-top: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    h1 {
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
            background: #005387ff;
        }
    }
`

export default WlcScreen;