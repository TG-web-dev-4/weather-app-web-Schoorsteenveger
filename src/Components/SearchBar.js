import React, { useState } from 'react'
import { StyledSearchBar } from './styled/SearchBar.styled'
import { StyledInput } from './styled/Input.styled'
// import { StyledButton } from './styled/Button.styled'



const SearchBar = ({ input, setInput }) => {



    const inputHandler = (event) => {

        setInput(event.target.value)
    }

    return (
        <StyledSearchBar>
            {/* <input type="text" placeholder="search city" value={input} onChange={inputHandler} /> */}
            <StyledInput type="text" placeholder="Search..." value={input} onChange={inputHandler} onKeyPress={inputHandler} />
            {/* <StyledInput type="text" placeholder="Search..." value={input} onKeyPress={inputHandler} /> */}
            {/* <StyledButton onClick={""} type="submit">Submit</StyledButton> */}
        </StyledSearchBar>
    )
}

export default SearchBar

// const inputHandler = (event) => {
//     //     if (event.key === "Enter") {
//     //         event.preventDefault();
//     //     } else {
//     //         setInput(event.target.value)
//     //         console.log(setInput)
//     //     }

//     // }