import React, { useState } from 'react'
import { StyledSearchBar } from './styled/SearchBar.styled'
import { StyledInput } from './styled/Input.styled'
import { StyledButton } from './styled/Button.styled'



const SearchBar = ({ input, setInput }) => {


    const inputHandler = (event) => {

        setInput(event.target.value)

    }

    return (
        <StyledSearchBar>
            <StyledInput type="text" placeholder="Search..." value={input} onChange={inputHandler} onKeyPress={inputHandler} />
            {/* <StyledButton onClick={""} type="submit">Submit</StyledButton> */}
        </StyledSearchBar>
    )
}

export default SearchBar
