import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }

    html, body {
    box-sizing: content-box;
    width: 100%;
    min-width: 1100px;
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

@media (max-width: 1000px) {
    body,html {
        min-width: 600px;
    }
}
`