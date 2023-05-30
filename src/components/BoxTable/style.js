import { styled } from "styled-components";

export const StyledBox = styled.div`
width: 1100px;
box-sizing: border-box;
margin: 3rem auto;

h1 {
    font: 3rem 'Montserrat',sans-serif;
    letter-spacing: 1px;
    font-weight: bolder;
    text-align: right;
    color: #005387ff;
    margin-bottom: 0.5rem;
}

h2 {
    font: 1rem 'Lato',sans-serif;
    letter-spacing: 1px;
    text-align: right;
    color: #bbb;
    margin-bottom: 1.6rem;
}

.box_tabelaP {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.tabela_row {
    display: flex;
    flex-direction: row;
}


.espacamento:nth-child(n+1) {
width: 952px;
}

.espacamento:nth-child(3) {
width: 595px;
}

`