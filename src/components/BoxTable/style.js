import { styled } from "styled-components";

export const StyledBox = styled.div`
box-sizing: content-box;
width: 1100px;
box-sizing: border-box;
margin: 3rem auto;
display: flex;
flex-direction: column;
align-items: center;

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
    flex-wrap: nowrap;
}

.tabela_row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.outros_elementos {
    margin-left: 11.4rem;
}

.outros_elementos:nth-child(2n) {
    margin-top: 2rem;
}

.espacamento:nth-child(n+1) {
width: 952px;
}

.espacamento:nth-child(3) {
width: 595px;
}


@media (max-width: 1000px) {
    max-width: 500px;
    justify-content: center;
    border: 1px solid #000;
    align-items: center;

    h1 {
        font-size: 2rem;
    }

    .espacamento {
        display: none;
    }

    .box_tabelaP {
        max-width: 80%;
        flex-direction: row;
        overflow-y: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
    }

    .outros_elementos {
        margin: 0;
    }

    .outros_elementos:nth-child(2n) {
    margin-top: 0;
}
}

`