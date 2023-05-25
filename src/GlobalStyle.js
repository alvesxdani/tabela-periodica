import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
}

body {
    font-size: 11px;
}


a {
      text-decoration: none;
      color: #eee;
}

.box {
    max-width: 1074px;
    /* border: 1px solid #eee; */
    margin: 2rem auto;
}

h1 {
    font: 3rem 'Montserrat',sans-serif;
    letter-spacing: 1px;
    font-weight: bolder;
    text-align: right;
    color: #005387ff;
    margin-bottom: 1.6rem;
}

.box_tabelaP {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 1px solid #eee; */
}

.tabela_row {
    display: flex;
    flex-direction: row;
    /* border: 1px solid #eee; */
}
`