import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,100&display=swap');

* {
    box-sizing:border-box;
}

body {
    background-color: #f2f2f2;
    color: rgba (21, 26, 33);
    font-family: 'Lato', sans-serif;
    font-size:1.2em;
    margin:0;
    padding:0;
    width: 100%;
    display:flex;
    justify-content:center;
}

p {
    line-height: 1.5;
}

img {
    width: 100%;
}
`
export default GlobalStyles