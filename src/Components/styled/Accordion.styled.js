import styled from "styled-components";

export const StyledAccordion = styled.div`

.weatherDetail  {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 15px 20px -19px rgba(0,0,0,0.8);
    padding: 20px 15px;
    margin: 0 auto;
    background-color: rgba(230,280,0,0.4);
    width: 300px;
    
}

 .accordion, .containerAccordion {
     width: 29vmax;
     cursor: pointer; 
     display:flex;
     justify-content: space-evenly;
     border-bottom: 5px solid blue;
     padding: 20px 15px;
     align-items: center;
     background-color: rgba(230,280,0,0.4);
}

.accordion.active {
    background-color: blue;
}

.accordion:hover {
    transition: all .2s ease-in-out; 
    background-color: blue;
}

.accordion.collapsed  {
    display:flex;
    opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease;
    padding: 0;
}

.grid-item {
  text-align: center;
  padding: 5px;
  font-size: 14px;
  
}

.weatherIcon {
    width: 4em;
}

.containerIconArrow{
    background-color: #f2f2f2;
    color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
}

.iconDropDown {
    transition: all .2s ease-in-out; 
    font-size: 25px;
}

.iconDropDown:hover {
    transform: scale(1.7); 
}

.containerIconArrow:hover {
    background-color: greenyellow;
    cursor: pointer;
    padding: 10px  5px;   
}

/* .dailyItems {
    display: flex;
    flex-direction:column;
    background-color: pink;
} */


`