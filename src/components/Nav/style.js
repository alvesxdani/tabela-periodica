import { styled } from "styled-components";

export const StyledNav = styled.nav`
box-sizing: border-box;
display: flex;
width: 100%;
height: 60px;
background: #f9f9f9;
justify-content: center;
align-items: center;
gap: 1rem;
padding-right: 1rem;
font: bolder 1rem 'Montserrat', sans-serif;

    a {
        color: #a1a1a1;
        transition: all .80s ease-in;
        border-bottom: 3px solid transparent;
        padding: 0.4rem;
        border-radius: 5px;

        &:hover {
            background: #005387ff;
            color: #fff;
            box-shadow: 2px 2px 0px #c42e32ff;
            
        }
    }

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }
`