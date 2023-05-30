import { styled } from "styled-components";

export const StyledNav = styled.nav`
box-sizing: border-box;
height: 50px;
background: #eee7;
display: flex;
justify-content: end;
align-items: center;
gap: 1rem;
margin: 0.8rem;
padding-right: 1rem;
border-radius: 5px;
font: bolder 13px 'Montserrat', sans-serif;

    .menu_nav {
        border: 1px solid #000;
    }

    a {
        color: #a1a1a1;
        transition: all .80s ease-in;

        &:hover {
            color: #005387ff;
        }
    }
`