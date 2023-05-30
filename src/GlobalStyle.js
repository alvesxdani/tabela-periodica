import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }

    html, body {
    max-width: 100%;
    height: 100%;
    margin: 0;
}


    body {
    font-size: 11px;
}

    a {
      text-decoration: none;
      color: #bbb;
}
`