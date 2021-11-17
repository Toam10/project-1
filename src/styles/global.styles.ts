import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
    box-sizing:inherit;
}

html,
body {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;    background-color: white;
    box-sizing: border-box;
    scrollbar-color: black black;
}

input,
select,
textarea {
    font-family:inherit;
}

button {
    font-family: inherit;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
}

button:disabled{
    cursor: default;
}

::-webkit-scrollbar {
    background-color: black;
    width: 4px;
    height: 4px;
} 

::-webkit-scrollbar-thumb {
    position: absolute;
    background: black;
    border-radius: 3px;
}
`;
