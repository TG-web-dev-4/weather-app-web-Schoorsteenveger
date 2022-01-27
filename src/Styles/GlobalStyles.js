import { createGlobalStyle } from 'styled-components'
import myImage from '../../src/Assets/weatherbg.jpg';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,100&display=swap');

* {
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body {
    display:flex;
    height: auto;
    background-image:url(./Assets/weatherbg1.jpg);
    color: rgba (21, 26, 33);
    font-family: 'Lato', sans-serif;
    font-size:1.2em;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
}

p {
    line-height: 1.8;
}

img {
    width: 100%;
}

.cardView {
    display: flex;
    justify-content:center;
    flex-direction: column;
    margin: 100px 0 ;
    height: auto;
    max-width: 768px;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);
    padding: 25px 30px;
    border-radius: 3px;
    background-image: url(${myImage});
    background-color:blue;
    background-size: cover;
    position: relative;
}

.displayDataResult {
    background-color: #3968dc45;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.8);
    padding: 65px 60px;
    color:white;
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items: stretch;
    text-transform: uppercase;
    font-weight: bold;
    height: auto;
}

img.weatherIcon {
    width: 150px;
}

.header {
    flex-direction: column;
    text-align: center;
    border: transparent;
    background-color: rgba(0,0,0,0.4);
    color: white;
    padding: 2rem 3rem;

  h2 {
    font-weight: 600;
    color: white;
  }
}

.containerIconArrow{
    background-color: #f2f2f2;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.containerIconArrow:hover {
    background-color: greenyellow;
    cursor: pointer;
    transition: ease-in 1ms;
}

`
export default GlobalStyles