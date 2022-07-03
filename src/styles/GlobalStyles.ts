import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        background-color: var(--primary-dark);
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji" ;
        color: var(--black);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

    ul {
        list-style: none;
    }

    :root {
        --primary: #2C3E50;
        --primary-dark: #25313E;
        --secondary: #66ffcc;
        --secondary-light: #4dffc3;
        --secondary-dark: #00e699;
        --submit-ligth: #328ce7;
        --submit-dark: #1359a0;
        --cancel-color: #cccccc;
        --text-color: #fff;

        --input-height: 40px
    }
`;
