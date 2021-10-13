import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Inter", sans-serif;
    background: #1b1b1b;
    overflow-x: hidden
}

html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
    @media ( max-width: 1700px ) {
        font-size: 90%
    }
    @media ( max-width: 1300px ) {
        font-size: 75%
    }
}

button {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #FFA41B;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #FFA41B;
        color: white;
    }
}

h2 {
    font-weight: lighter;
    font-size: 3.5rem
}

h3 {
    color: white
}

h4 {
    font-weight: bold;
    font-size: 2rem
}

a {
    font-size: 1.1rem
}

span {
    font-weight: bold;
    color: #FFA41B;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`

export default GlobalStyle;