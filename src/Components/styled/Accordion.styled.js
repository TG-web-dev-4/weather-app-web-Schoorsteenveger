import styled from "styled-components";

export const StyledAccordion = styled.div`

.weatherDetail, .accordion {
    display: flex;
    justify-content: start;
    justify-content: space-evenly;
    background-color: transparent;
    align-items: center;
    box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.8);
    margin: 0;
    padding: 10px;
}

.accordion{
    cursor: pointer;
}

.accordionExpand  {
    display: flex;
    background-color: white;
    align-items: center;
    font-size: 14px;
    align-items: stretch;
    margin: 0 auto;
    
}
.containerIconArrow {
    font-size: 0.8em;
    padding: 5px 4px;
    margin-left: 5px 0;
    background: black;
    position:absolute;
    bottom:0;
    left: 0;
    width: 100%;
    text-align: center;
}

.containerIconArrow:hover{
    background-color: greenyellow;
    transition: ease-in 3ms;
    cursor:pointer;
}

.drowpDownContent{
    display:flex;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 15px;
  
}

.weatherIcon {
    width: 2.5em;
    height: 2.5em;
}

`