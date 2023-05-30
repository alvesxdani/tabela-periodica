import { styled } from "styled-components";

export const StyledNav = styled.nav`
box-sizing: border-box;
display: flex;
width: 98%;
height: 50px;
background: #eee7;
justify-content: end;
align-items: center;
gap: 1rem;
margin: 1rem auto;
padding-right: 1rem;
border-radius: 5px;
font: bolder 13px 'Montserrat', sans-serif;

    a {
        color: #a1a1a1;
        transition: all .80s ease-in;
        border-bottom: 3px solid transparent;

        &:hover {
            color: #005387ff;
            border-bottom: 3px solid #c42e32ff;
        }
    }
`